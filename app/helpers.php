<?php

/**
 * Parses markdown using Parsedown
 *
 * @param $text
 * @return string
 */
function markdown($text) {
    $parsedown = new Parsedown();

    return $parsedown->parse($text);
}

/**
 * Flashes a message or returns an instance of the flash class
 *
 * @param null $title
 * @param null $message
 * @return App\Http\Helpers\Flash|mixed
 */
function flash($title = null, $message = null) {
    $flash = app(App\Http\Helpers\Flash::class);

    if (func_num_args() == 0) {
        return $flash;
    }

    return $flash->info($title, $message);
}

/**
 * Used to store CSS files to be added and fetched
 *
 * @return App\Http\Asset
 */
function css() {
    $asset = app(App\Http\Helpers\Asset::class);
    $asset->setKey('css');

    return $asset;
}

/**
 * Used to store JS files to be added and fetched
 *
 * @return App\Http\Asset
 */
function js() {
    $asset = app(App\Http\Helpers\Asset::class);
    $asset->setKey('js');

    return $asset;
}

/**
 * Used to send emails throughout the site, with persistence, all emails are stored
 *
 * @return App\Http\Helpers\Mailer
 */
function mailer() {
    $mailer = app(App\Http\Helpers\Mailer::class);

    return $mailer;
}

/**
 * Money formatter
 *
 * @return App\Http\Helpers\MoneyFormatter
 */
function money() {
    $moneyFormatter = app(App\Http\Helpers\MoneyFormatter::class);

    return $moneyFormatter;
}

/**
 * Sets if active
 *
 * @param $path
 * @param string $active
 * @return string
 */
function setActive($path, $active = 'active') {
    return call_user_func_array('Request::is', (array) $path) ? $active : '';
}

/**
 * For use with select options, returns active string if item is active
 *
 * @param $model
 * @param $key
 * @param $value
 * @return string
 */
function selected($model, $key, $value = 1) {
    if ($model) {
        if ($model->$key == $value) {
            return 'selected="selected"';
        }
    } else {
        if (old($key) == $value) {
            return 'selected="selected"';
        }
    }
}

/**
 * Generates an inline form with a button for delete...
 *
 * @param $action
 * @param $type
 * @param string $text
 * @param string $class
 * @param array $data
 * @return string
 */
function inlineButtonForm($action, $type, $text = 'Delete', $class = 'btn-danger', array $data = []) {
    $csrfField = csrf_field();

    $attributes = '';

    foreach ($data as $key => $value) {
        $attributes .= $key . '="' . $value . '" ';
    }

    return <<<EOT
    <form action="$action" method="POST">
        $csrfField
        <input type="hidden" name="_method" value="$type">
        <button type="submit" class="btn $class" $attributes>$text</button>
    </form>
EOT;
}

/**
 * Gets the name from a month based on the number
 *
 * @param $month
 * @return string
 */
function getMonthNameFromNumber($month) {
    $dateObj = DateTime::createFromFormat('!m', $month);
    $monthName = $dateObj->format('F');

    return $monthName;
}

/**
 * Gets an instance of faker
 *
 * @return \Faker\Generator
 */
function faker() {
    $faker = new \Faker\Generator();

    return $faker;
}

/**
 * Gets server memory usage
 *
 * @return float
 */
function getServerMemoryUsage() {
    $free = shell_exec('free');
    $free = (string) trim($free);
    $freeArr = explode("\n", $free);
    $mem = explode(" ", $freeArr[1]);
    $mem = array_filter($mem);
    $mem = array_merge($mem);
    $memoryUsage = $mem[2] / $mem[1] * 100;

    return $memoryUsage;
}

/**
 * Get the server cpu usage
 *
 * @return mixed
 */
function getServerCpuUsage() {
    $loads = sys_getloadavg();
    $coreNums = trim(shell_exec("grep -P '^processor' /proc/cpuinfo|wc -l"));
    $load = round($loads[0] / ($coreNums + 1) * 100, 2);

    return $load;
}

/**
 * Simple helper to get image path
 *
 * @param $file
 * @param string $size
 * @param null $type
 * @return string
 */
function image($file, $size = 'full', $type = null) {
    // For when we have our auto stuff
    if (strstr($file, '/')) {
        return $file;
    }

    $filePath = 'image/' . $type . '/' . $size . '/' . $file;

    return $filePath;
}