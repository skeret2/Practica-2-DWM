# Configuración del Entorno de Desarrollo para Laravel y React

Practica 2 asignatura Introduccón web/movil.
Este repositorio contiene un proyecto desarrollado con Laravel para el backend y React en el frontend. Sigue los pasos a continuación para configurar el entorno de desarrollo en tu computadora.

Obs: Existe un carpeta frontend-Vue pero esta no fue implementada ya que decidi aprender React.

## Entorno de ejecución
    Debe tener instalado Node.js

## Crear una base de datos en Mysql
```bash
git clone https://github.com/skeret2/Practica-2-DWM.git
copy .env.example  en .env
```

## Dependencias de Laravel
```bash
cd Backend-Laravel
composer install
php artisan key:generate
```

### Migraciones en laravel
```bash
cd Backend-Laravel
php artisan migrate
```

## Levantar Laravel
```bash
php artisan serve
```

## Dependencias de React
```bash
cd frontend-react
npm install
```
### Librerias utilizadas
```bash
cd frontend-react
npm install react-bootstrap bootstrap
npm install axios
```
## Levantar React
```bash
npm start
```
