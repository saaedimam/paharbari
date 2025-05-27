<?php
/**
 * Template part for displaying the farm section
 */
?>

<section id="our-farm" class="section-padding bg-green-50">
    <div class="container-custom">
        <div class="mb-12 text-center">
            <h2 class="section-title">
                <?php echo get_theme_mod('farm_title', 'Our Farm'); ?>
            </h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                <?php echo get_theme_mod('farm_subtitle', 'Explore our diverse fruit plantation featuring hundreds of trees spread across our 40-acre hill farm.'); ?>
            </p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <?php
            $fruits = array(
                array(
                    'title' => 'Cashew',
                    'count' => '500+ Trees',
                    'icon' => 'cashew'
                ),
                array(
                    'title' => 'Coffee',
                    'count' => '400+ Plants',
                    'icon' => 'coffee'
                ),
                array(
                    'title' => 'Banana',
                    'count' => '500+ Trees',
                    'icon' => 'banana'
                ),
                array(
                    'title' => 'Lemon',
                    'count' => '500+ Trees',
                    'icon' => 'citrus'
                ),
                array(
                    'title' => 'Orange',
                    'count' => '200 Trees',
                    'icon' => 'citrus'
                ),
                array(
                    'title' => 'Mango',
                    'count' => '50 Trees',
                    'icon' => 'mango'
                ),
                array(
                    'title' => 'Grapes',
                    'count' => '100+ Vines',
                    'icon' => 'grape'
                ),
                array(
                    'title' => 'Other Fruits',
                    'count' => '100+ Varieties',
                    'icon' => 'fruits'
                )
            );

            foreach ($fruits as $fruit):
            ?>
                <div class="card group hover:scale-105">
                    <div class="p-6">
                        <div class="mb-4 text-green-600 bg-green-100 w-16 h-16 rounded-full flex items-center justify-center">
                            <?php get_template_part('template-parts/icons/' . $fruit['icon']); ?>
                        </div>
                        <h3 class="text-xl font-heading font-medium mb-2 text-green-900"><?php echo $fruit['title']; ?></h3>
                        <p class="text-amber-600 font-bold"><?php echo $fruit['count']; ?></p>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
        
        <div class="mt-16 text-center">
            <a 
                href="https://wa.me/<?php echo get_theme_mod('whatsapp_number', '8801729809879'); ?>" 
                target="_blank" 
                rel="noopener noreferrer"
                class="btn-primary"
            >
                <?php _e('Order Fresh Fruits Now', 'paharbari'); ?>
            </a>
        </div>
    </div>
</section>