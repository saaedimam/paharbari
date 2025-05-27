<footer class="bg-green-900 text-white pt-16 pb-8">
    <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
                <div class="flex items-center mb-4">
                    <svg class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3C17.5228 3 22 7.47715 22 13C22 18.5228 17.5228 23 12 23C6.47715 23 2 18.5228 2 13C2 7.47715 6.47715 3 12 3Z" stroke="currentColor" stroke-width="2"/>
                        <path d="M12 7V13L16 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <span class="ml-2 font-heading font-semibold text-xl">
                        <?php bloginfo('name'); ?>
                    </span>
                </div>
                <p class="text-green-100 mb-4">
                    <?php bloginfo('description'); ?>
                </p>
            </div>

            <div>
                <h3 class="text-xl font-heading font-medium mb-4"><?php _e('Contact Us', 'paharbari'); ?></h3>
                <div class="space-y-3">
                    <div class="flex items-start">
                        <svg class="w-5 h-5 mr-2 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                        <a href="tel:+8801729809879" class="text-green-100 hover:text-white transition-colors">
                            +8801729809879
                        </a>
                    </div>
                    <div class="flex items-start">
                        <svg class="w-5 h-5 mr-2 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        <a href="mailto:paharbariorganics@gmail.com" class="text-green-100 hover:text-white transition-colors">
                            paharbariorganics@gmail.com
                        </a>
                    </div>
                    <div class="flex items-start">
                        <svg class="w-5 h-5 mr-2 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        <span class="text-green-100">
                            Naikkonchori, Bandarban, Bangladesh
                        </span>
                    </div>
                </div>
            </div>

            <div>
                <h3 class="text-xl font-heading font-medium mb-4"><?php _e('Quick Links', 'paharbari'); ?></h3>
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'footer',
                    'container' => false,
                    'menu_class' => 'space-y-2',
                    'fallback_cb' => false,
                ));
                ?>
            </div>

            <div>
                <h3 class="text-xl font-heading font-medium mb-4"><?php _e('Follow Us', 'paharbari'); ?></h3>
                <div class="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                       class="bg-white text-green-900 p-2 rounded-full hover:bg-green-100 transition-colors">
                        <span class="sr-only">Facebook</span>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
                        </svg>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                       class="bg-white text-green-900 p-2 rounded-full hover:bg-green-100 transition-colors">
                        <span class="sr-only">Instagram</span>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12,2.2c3.2,0,3.6,0,4.9.1,3.3.1,4.8,1.7,4.9,4.9.1,1.3.1,1.6.1,4.8,0,3.2,0,3.6-.1,4.8-.1,3.2-1.7,4.8-4.9,4.9-1.3.1-1.6.1-4.9.1-3.2,0-3.6,0-4.8-.1-3.3-.1-4.8-1.7-4.9-4.9-.1-1.3-.1-1.6-.1-4.8,0-3.2,0-3.6.1-4.8C2.4,4,4,2.4,7.2,2.3,8.5,2.2,8.8,2.2,12,2.2ZM12,0C8.7,0,8.3,0,7.1.1,2.7.3.3,2.7.1,7.1,0,8.3,0,8.7,0,12s0,3.7.1,4.9c.2,4.4,2.6,6.8,7,7,1.2.1,1.6.1,4.9.1s3.7,0,4.9-.1c4.4-.2,6.8-2.6,7-7,.1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.2-4.4-2.6-6.8-7-7C15.7,0,15.3,0,12,0Zm0,5.8A6.2,6.2,0,1,0,18.2,12,6.2,6.2,0,0,0,12,5.8Zm0,10.2A4,4,0,1,1,16,12,4,4,0,0,1,12,16Zm6.4-10.5a1.5,1.5,0,1,1-1.5-1.5A1.5,1.5,0,0,1,18.4,5.5Z"/>
                        </svg>
                    </a>
                </div>
                <div class="mt-6">
                    <a href="https://wa.me/8801729809879" target="_blank" rel="noopener noreferrer" class="btn-secondary">
                        <?php _e('Order Fruits Now', 'paharbari'); ?>
                    </a>
                </div>
            </div>
        </div>

        <div class="pt-8 border-t border-green-800">
            <p class="text-center text-green-100">
                &copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. <?php _e('All rights reserved.', 'paharbari'); ?>
            </p>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>