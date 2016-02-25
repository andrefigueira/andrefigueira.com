@if(session()->has('flash_message_overlay'))
    <script src="js/dependencies/bootstrap-sweetalert/lib/sweet-alert.min.js"></script>

    <script>
        $(function(){
            setTimeout(function () {
                swal({
                    title: "{!! session()->get('flash_message_overlay.title') !!}",
                    text: "{!! session()->get('flash_message_overlay.message') !!}",
                    type: "{{ session()->get('flash_message_overlay.level') }}",
                    confirmButtonText: "Continue"
                });
            }, 0);
        });
    </script>
@endif