<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $fillable = [
        'name',
        'permalink',
        'excerpt',
        'content',
    ];

    /**
     * @return \Illuminate\Contracts\Routing\UrlGenerator|string
     */
    public function getCanonical()
    {
        return url(
            $this->created_at->format('Y') . '/' .
            $this->created_at->format('m') . '/' .
            $this->created_at->format('d') . '/' .
            $this->permalink
        );
    }
}
