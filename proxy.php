<?php
// Obtener la URL a la que se desea hacer proxy
$url = 'https://iframes.karveinformatica.com/AinacarIframe/views/home.php?lang=es' . $_SERVER['REQUEST_URI'];

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

// Mostrar el cuerpo de la respuesta
echo $body;
?>
