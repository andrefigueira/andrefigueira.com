<?php

namespace App\Http\ViewComposers;

use Auth;
use Illuminate\View\View;

/**
 * Class DashboardViewComposer
 * @package App\Http\ViewComposers
 * @author Andre Figueira <andre@designfront.co.uk>
 */
class DashboardViewComposer
{
    public function compose(View $view)
    {
        $user = Auth::user();

        $view->with('user', $user);
    }
}