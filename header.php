<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" id="site-header">
    <div class="container-custom">
        <div class="flex items-center justify-between py-4">
            <?php if (has_custom_logo()): ?>
                <?php the_custom_logo(); ?>
            <?php else: ?>
                <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center">
                    <svg class="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3C17.5228 3 22 7.47715 22 13C22 18.5228 17.5228 23 12 23C6.47715 23 2 18.5228 2 13C2 7.47715 6.47715 3 12 3Z" stroke="currentColor" stroke-width="2"/>
                        <path d="M12 7V13L16 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <span class="ml-2 font-heading font-semibold text-xl text-green-900">
                        <?php bloginfo('name'); ?>
                    </span>
                </a>
            <?php endif; ?>

            <nav class="hidden md:flex items-center space-x-8">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'container' => false,
                    'menu_class' => 'flex items-center space-x-8',
                    'fallback_cb' => false,
                ));
                ?>
                <a href="https://wa.me/8801729809879" target="_blank" rel="noopener noreferrer" class="btn-primary">
                    Order Fruits
                </a>
            </nav>

            <button class="md:hidden" id="mobile-menu-button" aria-label="Toggle menu">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </button>
        </div>

        <div class="md:hidden hidden" id="mobile-menu">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'container' => false,
                'menu_class' => 'flex flex-col space-y-4',
                'fallback_cb' => false,
            ));
            ?>
            <a href="https://wa.me/8801729809879" target="_blank" rel="noopener noreferrer" class="btn-primary text-center mt-4">
                Order Fruits
            </a>
        </div>
    </div>
</header>