# Configuración de EmailJS para el Formulario de Contacto

## Pasos para configurar EmailJS:

### 1. Crear cuenta en EmailJS
- Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
- Crea una cuenta gratuita

### 2. Configurar el servicio de email
- En el dashboard, ve a "Email Services"
- Haz clic en "Add New Service"
- Selecciona tu proveedor de email (Gmail recomendado)
- Conecta tu cuenta de Gmail (gez.carlos.98@gmail.com)
- Copia el **Service ID** que se genera

### 3. Crear template de email
- Ve a "Email Templates"
- Haz clic en "Create New Template"
- Configura el template con estas variables:
  ```
  From: {{from_name}} <{{from_email}}>
  To: gez.carlos.98@gmail.com
  Subject: Nuevo mensaje desde tu portfolio
  
  Mensaje:
  {{message}}
  
  Enviado por: {{from_name}}
  Email: {{from_email}}
  ```
- Copia el **Template ID** que se genera

### 4. Obtener Public Key
- Ve a "Account" > "General"
- Copia tu **Public Key**

### 5. Configurar variables de entorno
Edita el archivo `.env.local` con tus valores reales:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id_aqui
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
```

### 6. Reiniciar el servidor
```bash
npm run dev
```

¡Listo! Ahora el formulario enviará emails directamente a gez.carlos.98@gmail.com