<?php
/**
 * Template part for displaying the hero section
 */
?>

<section id="home" class="relative min-h-screen flex items-center justify-center bg-cover bg-center" style="background-image: url('<?php echo get_theme_mod('hero_background', 'https://images.pexels.com/photos/3243027/pexels-photo-3243027.jpeg'); ?>')">
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    
    <div class="container-custom relative z-10 text-white text-center">
        <div class="max-w-3xl mx-auto">
            <h1 class="font-heading font-bold mb-4 animate-fade-in">
                <?php echo get_theme_mod('hero_title', 'Fruits from Nature & Eco-Friendly Stay'); ?>
            </h1>
            <div class="mb-8 text-xl md:text-2xl animate-fade-in animate-fade-in-delay-1">
                <p><?php bloginfo('name'); ?></p>
            </div>
            <div class="animate-fade-in animate-fade-in-delay-2">
                <a href="https://wa.me/<?php echo get_theme_mod('whatsapp_number', '8801729809879'); ?>" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="btn-primary text-lg">
                    <?php _e('Order Fruits', 'paharbari'); ?>
                    <svg class="inline-block w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" class="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
        </a>
    </div>
</section>