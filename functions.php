<?php
/**
 * PaharBari Organics Theme Functions
 */

if (!defined('ABSPATH')) exit;

// Theme Setup
function paharbari_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    add_theme_support('custom-logo');
    
    // Register Menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'paharbari'),
        'footer' => __('Footer Menu', 'paharbari')
    ));
}
add_action('after_setup_theme', 'paharbari_setup');

// Enqueue Scripts and Styles
function paharbari_scripts() {
    wp_enqueue_style('paharbari-style', get_stylesheet_uri(), array(), '1.0.0');
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Lato:wght@300;400;700&display=swap', array(), null);
    wp_enqueue_script('paharbari-main', get_template_directory_uri() . '/assets/js/main.js', array(), '1.0.0', true);
    
    // Localize script for AJAX
    wp_localize_script('paharbari-main', 'paharbariAjax', array(
        'ajaxurl' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('paharbari-nonce')
    ));
}
add_action('wp_enqueue_scripts', 'paharbari_scripts');

// Custom Post Types
function paharbari_post_types() {
    // Fruits
    register_post_type('fruit', array(
        'labels' => array(
            'name' => __('Fruits', 'paharbari'),
            'singular_name' => __('Fruit', 'paharbari')
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_icon' => 'dashicons-carrot'
    ));
    
    // Investment Models
    register_post_type('investment', array(
        'labels' => array(
            'name' => __('Investment Models', 'paharbari'),
            'singular_name' => __('Investment Model', 'paharbari')
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail'),
        'menu_icon' => 'dashicons-money-alt'
    ));
}
add_action('init', 'paharbari_post_types');

// Contact Form Handler
function paharbari_handle_contact_form() {
    check_ajax_referer('paharbari-nonce', 'nonce');
    
    $name = sanitize_text_field($_POST['name']);
    $email = sanitize_email($_POST['email']);
    $phone = sanitize_text_field($_POST['phone']);
    $model = sanitize_text_field($_POST['investmentModel']);
    $amount = sanitize_text_field($_POST['amount']);
    $message = sanitize_textarea_field($_POST['message']);
    
    $to = 'paharbariorganics@gmail.com';
    $subject = 'New Investment Interest from ' . $name;
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n";
    $body .= "Investment Model: $model\n";
    $body .= "Amount: $amount\n";
    $body .= "Message: $message\n";
    
    $headers = array('Content-Type: text/html; charset=UTF-8');
    
    $sent = wp_mail($to, $subject, $body, $headers);
    
    wp_send_json(array(
        'success' => $sent,
        'message' => $sent ? 'Thank you for your interest!' : 'Error sending message.'
    ));
}
add_action('wp_ajax_paharbari_contact', 'paharbari_handle_contact_form');
add_action('wp_ajax_nopriv_paharbari_contact', 'paharbari_handle_contact_form');

// Theme Options
function paharbari_theme_options() {
    add_menu_page(
        'Theme Options',
        'Theme Options',
        'manage_options',
        'paharbari-options',
        'paharbari_options_page',
        'dashicons-admin-generic',
        60
    );
}
add_action('admin_menu', 'paharbari_theme_options');

function paharbari_options_page() {
    // Theme options page content
    include get_template_directory() . '/inc/theme-options.php';
}

// Custom Widget Areas
function paharbari_widgets_init() {
    register_sidebar(array(
        'name' => __('Footer Widget Area', 'paharbari'),
        'id' => 'footer-widget-area',
        'description' => __('Add widgets here to appear in footer', 'paharbari'),
        'before_widget' => '<div class="footer-widget">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>'
    ));
}
add_action('widgets_init', 'paharbari_widgets_init');