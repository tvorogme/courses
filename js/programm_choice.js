function clear_texts() {
    $(".program_select_algo_text").css('display', 'none');
    $(".program_select_robo_text").css('display', 'none');
    $(".program_select_programming_text").css('display', 'none');
    $(".program_select_bioinf_text").css('display', 'none');
    $(".program_select_ad_text").css('display', 'none');
    $(".program_select_blockchain_text").css('display', 'none');
    $(".program_select_starter_text").css('display', 'none');
}

const select_color = "5px solid rgba(238, 229, 58, 0.5)";

$(document).click(function () {
    $(".program_select_col_item").css("border", '5px solid white');
    $(".program_select_wrapper input[type='radio']:checked").parent().css("border", select_color);
});

$(document).ready(function () {
    $(".program_select_col_item").css("border", '5px solid white');
    $(".program_select_ad_text").css('display', 'flex');
    $(".program_select_wrapper input[type='radio']:checked").parent().css("border", select_color);

    $('#program_select_algo').click(function () {
        if ($(this).is(':checked')) {
            clear_texts();
            $(".program_select_algo_text").css('display', 'flex');
        }
    });


    $('#program_select_robo').click(function () {
        if ($(this).is(':checked')) {
            clear_texts();
            $(".program_select_robo_text").css('display', 'flex');
        }
    });


    $('#program_select_programming').click(function () {
        if ($(this).is(':checked')) {
            clear_texts();
            $(".program_select_programming_text").css('display', 'flex');
        }
    });


    $('#program_select_bioinf').click(function () {
        if ($(this).is(':checked')) {
            clear_texts();
            $(".program_select_bioinf_text").css('display', 'flex');
        }
    });


    $('#program_select_ad').click(function () {
        if ($(this).is(':checked')) {
            clear_texts();
            $(".program_select_ad_text").css('display', 'flex');
        }
    });


    $('#program_select_blockchain').click(function () {
        if ($(this).is(':checked')) {
            clear_texts();
            $(".program_select_blockchain_text").css('display', 'flex');
        }
    });


    $('#program_select_starter').click(function () {
        if ($(this).is(':checked')) {
            clear_texts();
            $(".program_select_starter_text").css('display', 'flex');
        }
    });

});