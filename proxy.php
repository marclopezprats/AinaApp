<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Definir una función alternativa para obtener todas las cabeceras
if (!function_exists('getallheaders')) {
    function getallheaders() {
        $headers = [];
        foreach ($_SERVER as $name => $value) {
            if (substr($name, 0, 5) == 'HTTP_') {
                $headers[str_replace(' ', '-', ucwords(strtolower(str_replace('_', ' ', substr($name, 5)))))] = $value;
            }
        }
        return $headers;
    }
}

// Obtener la URL a la que se desea hacer proxy
$request_uri = $_SERVER['REQUEST_URI'];
$base_url = 'https://iframes.karveinformatica.com';
$url = $base_url . $request_uri;

// Inicializar cURL
$ch = curl_init($url);

// Configurar las opciones de cURL
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);

// Incluir las cabeceras de la solicitud original
$headers = [];
foreach (getallheaders() as $name => $value) {
    $headers[] = "$name: $value";
}
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

// Ejecutar la solicitud
$response = curl_exec($ch);

// Verificar si hubo errores en cURL
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
    curl_close($ch);
    exit;
}

// Dividir la cabecera del cuerpo
$header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
$header = substr($response, 0, $header_size);
$body = substr($response, $header_size);

curl_close($ch);

// Reenviar las cabeceras al navegador
$header_array = explode("\r\n", $header);
foreach ($header_array as $header_line) {
    if (strpos($header_line, 'Set-Cookie:') !== false) {
        // Asegurarse de que las cookies se configuren con SameSite=None y Secure
        $header_line = str_replace('SameSite=Lax', 'SameSite=None; Secure', $header_line);
    }
    if (!empty($header_line)) {
        header($header_line, false);
    }
}

// Verificar y ajustar el tipo de contenido para archivos estáticos
$content_type = '';
foreach ($header_array as $header_line) {
    if (stripos($header_line, 'Content-Type:') === 0) {
        $content_type = trim(substr($header_line, 13));
        header("Content-Type: $content_type");
        break;
    }
}

// Mostrar el cuerpo de la respuesta
echo $body;
