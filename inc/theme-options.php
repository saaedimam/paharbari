<?php
/**
 * Theme Options Page
 */

if (!defined('ABSPATH')) exit;

// Save theme options
if (isset($_POST['paharbari_save_options']) && check_admin_referer('paharbari_options_nonce')) {
    update_option('hero_background', sanitize_text_field($_POST['hero_background']));
    update_option('hero_title', sanitize_text_field($_POST['hero_title']));
    update_option('whatsapp_number', sanitize_text_field($_POST['whatsapp_number']));
    
    echo '<div class="updated"><p>Settings saved.</p></div>';
}

// Get current values
$hero_background = get_option('hero_background', 'https://images.pexels.com/photos/3243027/pexels-photo-3243027.jpeg');
$hero_title = get_option('hero_title', 'Fruits from Nature & Eco-Friendly Stay');
$whatsapp_number = get_option('whatsapp_number', '8801729809879');
?>

<div class="wrap">
    <h1><?php _e('PaharBari Theme Options', 'paharbari'); ?></h1>
    
    <form method="post" action="">
        <?php wp_nonce_field('paharbari_options_nonce'); ?>
        
        <table class="form-table">
            <tr>
                <th scope="row">
                    <label for="hero_background"><?php _e('Hero Background Image URL', 'paharbari'); ?></label>
                </th>
                <td>
                    <input type="text" id="hero_background" name="hero_background" value="<?php echo esc_attr($hero_background); ?>" class="regular-text">
                </td>
            </tr>
            <tr>
                <th scope="row">
                    <label for="hero_title"><?php _e('Hero Title', 'paharbari'); ?></label>
                </th>
                <td>
                    <input type="text" id="hero_title" name="hero_title" value="<?php echo esc_attr($hero_title); ?>" class="regular-text">
                </td>
            </tr>
            <tr>
                <th scope="row">
                    <label for="whatsapp_number"><?php _e('WhatsApp Number', 'paharbari'); ?></label>
                </th>
                <td>
                    <input type="text" id="whatsapp_number" name="whatsapp_number" value="<?php echo esc_attr($whatsapp_number); ?>" class="regular-text">
                </td>
            </tr>
        </table>
        
        <p class="submit">
            <input type="submit" name="paharbari_save_options" class="button-primary" value="<?php _e('Save Changes', 'paharbari'); ?>">
        </p>
    </form>
</div>