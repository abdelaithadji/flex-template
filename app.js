


    $(document).ready(function (){
        
        
        
        $('#menu-btn').on( 'click', function(e) {
            
            e.preventDefault();
           
               
                $( 'ul li' ).not(':last-child').toggleClass('active');
        
        });
        
        // $(html).click(function() {
            
        //     if ($('#menu-btn').hasClass('active')) {
                
        //         $('#menu-btn').toggleClass('active');
        //         $('.mobile-item').toggleClass('active');
            
        //     }
            
        // });

        
        
    });