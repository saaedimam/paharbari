<?php
/**
 * Template part for displaying the about section
 */
?>

<section id="about" class="section-padding bg-white">
    <div class="container-custom">
        <div class="mb-12">
            <h2 class="section-title text-center">
                <?php echo get_theme_mod('about_title', 'About PaharBari Organics'); ?>
            </h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto text-center">
                <?php echo get_theme_mod('about_subtitle', 'We are committed to eco-conscious farming, community impact, and sustainable living in the beautiful hills of Bandarban.'); ?>
            </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
                <div class="rounded-lg overflow-hidden shadow-lg">
                    <?php
                    $about_image = get_theme_mod('about_image', 'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg');
                    ?>
                    <img src="<?php echo esc_url($about_image); ?>" 
                         alt="<?php bloginfo('name'); ?> Farm" 
                         class="w-full h-auto"
                    />
                </div>
            </div>
            
            <div>
                <div class="prose prose-lg">
                    <?php echo wpautop(get_theme_mod('about_content', 'PaharBari Organics was founded with a vision to create a sustainable agricultural enterprise that works in harmony with nature. Our 40-acre agro-ecological farm, nestled in the hills of Naikkonchori, Bandarban, features diverse fruit plantations, a serene lake, and untouched natural beauty.')); ?>
                </div>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                    <?php
                    $features = array(
                        array(
                            'icon' => 'sprout',
                            'title' => 'Eco-conscious Farming',
                            'description' => 'We practice sustainable agriculture that works with nature, not against it.'
                        ),
                        array(
                            'icon' => 'users',
                            'title' => 'Community Impact',
                            'description' => 'Supporting local communities through employment and educational opportunities.'
                        ),
                        array(
                            'icon' => 'mountain',
                            'title' => 'Highland Agriculture',
                            'description' => 'Our 40-acre farm in the hills of Bandarban offers unique growing conditions.'
                        ),
                        array(
                            'icon' => 'heart',
                            'title' => 'Sustainable Living',
                            'description' => 'Promoting a lifestyle that respects and preserves our natural environment.'
                        )
                    );

                    foreach ($features as $feature):
                    ?>
                        <div class="flex">
                            <div class="flex-shrink-0 mr-4 text-green-600">
                                <?php get_template_part('template-parts/icons/' . $feature['icon']); ?>
                            </div>
                            <div>
                                <h3 class="font-medium text-lg mb-1"><?php echo $feature['title']; ?></h3>
                                <p class="text-sm text-gray-600"><?php echo $feature['description']; ?></p>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</section>