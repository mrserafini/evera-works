# 📧 Setup del correo de contacto (Resend) — Pendiente de datos del cliente

> **Estado:** el código está 100% implementado y verificado (typecheck + build OK).
> Solo falta configurar 2 datos que requieren acceso del cliente. Este archivo es la guía
> para retomarlo cuando tengamos ese acceso.

---

## ✅ Qué ya está hecho (no hay que tocar código)

El formulario de contacto ya envía **dos correos** vía Resend:

1. **Notificación interna** → llega a `hello@everapartner.com` con los datos del lead.
   El *Reply-To* es el correo del usuario (respondes con un clic).
2. **Correo de confirmación al usuario** → branded con el logo EVERA, bilingüe
   (inglés por defecto, español si el usuario cambió el idioma en la página), con
   resumen de lo que envió + "qué sigue ahora".

Extras ya incluidos: honeypot anti-spam, y si el correo de confirmación falla el lead
interno igual cuenta como éxito.

**Archivos involucrados** (por si hay que revisar):
- `lib/resend.ts` — envío de los 2 correos + plantilla de confirmación
- `messages/en.json` / `messages/es.json` — copy bajo `contact.emailConfirmation`
- `components/forms/contact-form.tsx` — locale + honeypot
- `lib/validations.ts` — schema con `locale` y `company_website` (honeypot)
- `app/api/contact/route.ts` — corta el honeypot y pasa el locale
- `.env.example` — variables necesarias

Vista previa del diseño del correo (abrir en navegador):
`scratchpad/email-preview.html` (en la carpeta temporal de la sesión).

---

## 🔑 Lo único pendiente: 2 datos (requieren acceso del cliente)

### Paso 1 — Crear cuenta y sacar la API Key
1. Ir a **resend.com** → crear cuenta gratis.
2. **API Keys → Create API Key** → copiar la clave (empieza con `re_...`).
   → Ese es el `RESEND_API_KEY`.

### Paso 2 — Verificar el dominio `everapartner.com` (parte DNS)
1. En Resend: **Domains → Add Domain →** escribir `everapartner.com`.
2. Resend mostrará **3–4 registros DNS** (DKIM `resend._domainkey`, SPF/MX en el
   subdominio `send.`, y DMARC opcional). **Esos registros los genera Resend**, no se inventan.
3. **Dónde pegarlos** (el dominio está en Google Workspace):
   - El DNS vive en el **registrador donde el cliente compró el dominio**.
   - Para encontrarlo: **admin.google.com → Cuenta → Dominios → Administrar dominios**
     → ahí aparece el registrador. Abrir el panel DNS de ese registrador y agregar los registros.
4. ⚠️ **Importante:** estos registros **NO rompen el correo de Google Workspace**.
   Resend usa el subdominio `send.everapartner.com` y su propio selector DKIM, separados
   de los MX/DKIM de Google. El correo `hello@everapartner.com` sigue funcionando igual.
5. Esperar a que Resend marque el dominio como **Verified** (puede tardar de minutos a
   unas horas según el DNS).

### Paso 3 — Configurar las variables de entorno
Una vez con la key y el dominio verificado:

**Local** (`evera-works/.env.local`, ver `.env.example`):
```
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL=hello@everapartner.com
SITE_URL=https://everapartner.com
```

**Producción** (Vercel → Project → Settings → Environment Variables):
- `RESEND_API_KEY` = la key
- `CONTACT_EMAIL` = `hello@everapartner.com`
- `SITE_URL` = `https://everapartner.com`
  (o `https://evera-works.vercel.app` mientras el dominio no apunte a Vercel)

---

## 🧪 Cómo probar cuando esté configurado

1. `pnpm dev` y enviar el formulario en `/en/contact`:
   - Llega la **notificación interna** a `hello@everapartner.com` (Reply-To = correo del usuario).
   - Llega el **correo de confirmación** al correo que puso el usuario, en inglés, con logo.
2. Repetir en `/es/contact` → el correo de confirmación llega en español.
3. Honeypot: rellenar el campo oculto `company_website` con devtools → NO debe enviarse correo.
4. En Resend → **Logs**: verificar `delivered` (no `bounced`) y probar que no caiga en spam
   (mandar a un Gmail/Outlook de prueba).
5. Desplegar a Vercel (`npx vercel --prod`) y repetir la prueba en producción.

---

## 📌 Nota aparte (opcional, no bloquea el correo)

El `next-sitemap.config.js` aún genera el sitemap con `everaworksbpo.com`. Cuando se
confirme el dominio final, actualizar `SITE_URL` también hace que el sitemap use
`everapartner.com`. Revisar `next-sitemap.config.js` si se quiere forzar el dominio nuevo.
