<?php

namespace App\Http\Helpers;

/**
 * Class Asset
 * @package App\Http
 * @author Andre Figueira <andre@designfront.co.uk>
 */
class Asset
{
    /**
     * @var \Illuminate\View\View
     */
    protected $view;

    /**
     * The key of where the assets are stored
     *
     * @var $key
     */
    protected $key;

    /**
     * Asset constructor.
     */
    public function __construct()
    {
        $this->view = view();
    }

    /**
     * Takes a file path and adds it to an array which will be iterated and parses as asset links
     *
     * @param $filePath
     * @return $this
     */
    public function add($filePath)
    {
        if ($this->key == null) {
            return false;
        }

        $this->view->assets[$this->key][] = $filePath;

        return $this;
    }

    /**
     * Return the defined assets
     *
     * @return mixed
     */
    public function get()
    {
        if (!isset($this->view->assets[$this->key])) {
            return false;
        }

        return $this->view->assets[$this->key];
    }

    /**
     * Sets the asset key
     *
     * @param $key
     */
    public function setKey($key)
    {
        $this->key = $key;
    }
}