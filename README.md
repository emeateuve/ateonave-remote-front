# 🎮 Ateonave Remote

<h1 align="center">
<em><strong>"Alexa, ya está er tío en casa"</strong></em>
</h1>
<p align="center"><img src="./docs/img/er_tio.gif" alt="test"></p>
<p align="center">No vuelvo a agacharme para encender el ordenador.</p>

## 🚀 ¿Qué es esto?

Esta app se encarga de encender y apagar mi pc (La ateonave) a través de un servicio que se comunica con mi ordenador personal.

- 🔌 **Encendido** → La app hace una llamada al endpoint (**wake**) → El servidor envía un **Wake-on-LAN** (magic packet).
- 📴 **Apagado** → La app hace una llamada al endpoint (**shutdown**) → El servidor se conecta a mi pc a través de un **túnel SSH reverso** → Ejecuta el comando de apagado.
- 🎮 Todo con estética del **Wario Ware** de la GBA porque está increíble.

Proyecto pequeño, práctico, visual y con bastante humor.

---

# 🛠️ Instalación del proyecto

### 1️⃣ Clonar el repo

```bash
git clone https://github.com/emeateuve/ateonave-remote-front.git
cd ateonave-remote-front
```

### 2️⃣ Instalar dependencias

```bash
npm install
```

### 3️⃣ Configurar variables de entorno

```bash
cp env.example.ts src/environments/environment.ts
```

---

# 🌐 Build

```bash
ng build --configuration production
```

Salida en:

```
dist/ateonave-remote-front/browser
```

---

# 📱 Build del APK en Android

Sí, sólo en Android, si tienes iOS te buscas la vida.

### 1️⃣ Copiar los archivos web a la plataforma Android

```bash
npx cap copy android
```

### 2️⃣ Ir a la carpeta de Android

```bash
cd android
```

### 3️⃣ Generar la APK debug

```bash
./gradlew.bat assembleDebug
```

La APK aparecerá en:

```
android/app/build/outputs/apk/debug/app-debug.apk
```

La instalas en tu móvil y listo.

---

# 📁 Estructura del proyecto

```
/public
    /assets
        /sprites
            ...Aquí me he currado con el Piskel los assets
/src
    /app
        /core
            /interceptors
        /pages
        /services
        /shared
        /types
    /environments
        env.ts
env.example.ts
```

---

# 🎉 Notas finales

- Esto no es una app para publicar en ninguna store. Es un proyecto que se ha hecho en 2 días.
- Está hecha solo para controlar mi propio ordenador.
- **_Booyakah Booyakah, 619!_**
