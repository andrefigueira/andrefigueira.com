<?php

namespace App\Http\Helpers;

/**
 * Class Flash
 * @package App\Helpers
 * @author Andre Figueira <andre@designfront.co.uk>
 */
class Flash
{
    /**
     * Save the message
     *
     * @param $title
     * @param $message
     * @param $level
     * @param $key
     */
    public function create($title, $message, $level, $key = 'flash_message')
    {
        if (session()->has($key)) {
            $flash = session()->get($key);

            if (array_key_exists('title', $flash)) {
                $flash = [$flash];
            }

            $flash[] = [
                'title' => $title,
                'message' => $message,
                'level' => $level,
            ];

            session()->flash($key, $flash);
        } else {
            session()->flash($key, [
                'title' => $title,
                'message' => $message,
                'level' => $level,
            ]);
        }
    }

    /**
     * @param $title
     * @param $message
     */
    public function info($title, $message)
    {
        return $this->create($title, $message, 'info');
    }

    /**
     * @param $title
     * @param $message
     */
    public function success($title, $message)
    {
        return $this->create($title, $message, 'success');
    }

    /**
     * @param $title
     * @param $message
     */
    public function error($title, $message)
    {
        return $this->create($title, $message, 'danger');
    }

    /**
     * @param $title
     * @param $message
     */
    public function warning($title, $message)
    {
        return $this->create($title, $message, 'warning');
    }

    /**
     * @param $title
     * @param $message
     * @param string $level
     */
    public function overlay($title, $message, $level = 'success')
    {
        return $this->create($title, $message, $level, 'flash_message_overlay');
    }
}