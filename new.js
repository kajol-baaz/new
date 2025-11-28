     $(function () {
        //when user scroll the nseacrch bar on the nav show and it showes when it reach in sec-2
        $(window).on('scroll', function(){
            var scrollPos = $(window).scrollTop();
            var sec2Offset = $('#sec-2').offset().top;
            if(scrollPos >= sec2Offset){
                $('#search-bar .input-group').fadeIn(300);
            } else {
                $('#search-bar .input-group').fadeOut(300);
            }
        });
        // when user clicks "join as startup" button the sec-5 shows
        $('#Startup').on('click', function(){
            $('#sec-5').slideDown(500, function(){
                // scroll to the section after it opens
                $('html, body').animate({
                    scrollTop: $('#sec-5').offset().top
                }, 400);
                // focus first input if present
                $('#startupName').focus();
            });
        });
        //this is for join as freelancer button
        $('#freelancer').on('click', function(){
            $('#sec-5').slideDown(500, function(){
                // scroll to the section after it opens
                $('html, body').animate({
                    scrollTop: $('#sec-5').offset().top
                }, 400);
                // focus first input if present
                $('#freelancerName').focus();
            });
        });
        // Open form
      $('#openStartupForm').on('click', function () {
        $('#startupFormWrap').removeClass('d-none').hide().slideDown(250);
        $('#startupName').focus();
      });

      // Close form
      $('#closeStartupForm').on('click', function () {
        $('#startupFormWrap').slideUp(200, function () { $(this).addClass('d-none'); });
      });

      // Reset button
      $('#resetStartup').on('click', function () {
        $('#startupForm')[0].reset();
        $('#startupFeedback').addClass('d-none');
      });
    //   to hide the cards of freelancer and startup when from is opend
      $('#openStartupForm').on('click', function () {
        $('.magic-sec').addClass('d-none');
      });
      //  to show the cards of freelancer and startup when from is closed
        $('#closeStartupForm').on('click', function () {
        $('.magic-sec').removeClass('d-none');
        });
      // Submit handler (AJAX simulation)
      $('#startupForm').on('submit', function (e) {
        e.preventDefault();
        var form = this;
        if (!form.checkValidity()) {
        // Let HTML5 show validation UI
        $(form).addClass('was-validated')[0].reportValidity();
        return;
        }

        // Show loading state
        $('#submitStartup').prop('disabled', true).text('Submitting...');
        $('#startupFeedback').addClass('d-none');

        // Simulate AJAX submit (replace with real endpoint)
        var formData = new FormData(form);
        setTimeout(function () {
        $('#submitStartup').prop('disabled', false).text('Complete Registration');
        $('#startupFeedback').removeClass('d-none').text('Registration successful ✓');
        // optionally hide form after success:
        $('#startupFormWrap').slideUp(500, function(){ $(this).addClass('d-none'); });
        $(form)[0].reset();
        }, 900);
      });
      // Open freelancer form
        $('#openFreelancerForm').on('click', function () {
        $('#freelancerFormWrap').removeClass('d-none').hide().slideDown(250);
        $('#freelancerName').focus();
        });
        // Close freelancer form
        $('#closeFreelancerForm').on('click', function () {
        $('#freelancerFormWrap').slideUp(200, function () { $(this).addClass('d-none'); });
        });
        //   to hide the cards of freelancer and startup when from is opend
      $('#openFreelancerForm').on('click', function () {
        $('.magic-sec').addClass('d-none');
      });
        //  to show the cards of freelancer and startup when from is closed
        $('#closeFreelancerForm').on('click', function () {
        $('.magic-sec').removeClass('d-none');
        });
        // Reset freelancer form
        $('#resetFreelancer').on('click', function () {
        $('#freelancerForm')[0].reset();
        $('#freelancerFeedback').addClass('d-none');
        });
        // Submit freelancer form handler (AJAX simulation)
        $('#freelancerForm').on('submit', function (e) {
        e.preventDefault();
        var form = this;
        if (!form.checkValidity()) {
        // Let HTML5 show validation UI
        $(form).addClass('was-validated')[0].reportValidity();
        return;
        }
        // Show loading state
        $('#submitFreelancer').prop('disabled', true).text('Submitting...');
        $('#freelancerFeedback').addClass('d-none');    
        // Simulate AJAX submit (replace with real endpoint)
        var formData = new FormData(form);
        setTimeout(function () {
        $('#submitFreelancer').prop('disabled', false).text('Complete Registration');
        $('#freelancerFeedback').removeClass('d-none').text('Registration successful ✓');
        // optionally hide form after success:
        $('#freelancerFormWrap').slideUp(500, function(){ $(this).addClass('d-none'); });
        $(form)[0].reset();
        }, 900);
    });
      });