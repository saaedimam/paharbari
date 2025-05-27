<?php
/**
 * Template part for displaying the bee hive section
 */
?>

<section id="bee-hive" class="section-padding bg-white">
    <div class="container-custom">
        <div class="mb-12 text-center">
            <h2 class="section-title">
                <?php echo get_theme_mod('bee_hive_title', 'Bee Hive & Honey'); ?>
            </h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                <?php echo get_theme_mod('bee_hive_subtitle', 'Our sustainable beekeeping operation supports biodiversity and produces premium organic honey.'); ?>
            </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
                <h3 class="text-2xl font-heading font-medium mb-4 text-green-900">
                    <?php echo get_theme_mod('bee_hive_heading', 'Sustainable Beekeeping'); ?>
                </h3>
                <div class="prose prose-lg mb-6">
                    <?php echo wpautop(get_theme_mod('bee_hive_description', 'At PaharBari Organics, we currently maintain 60 active bee hives that play a crucial role in pollinating our fruit trees and surrounding wild plants. Our beekeeping practice follows organic principles, ensuring the health of our bee colonies and the purity of our honey.')); ?>
                </div>
                
                <div class="bg-amber-50 p-6 rounded-lg border border-amber-200 mb-6">
                    <h4 class="font-medium text-amber-800 mb-3">
                        <?php echo get_theme_mod('honey_production_title', 'Our Honey Production'); ?>
                    </h4>
                    <ul class="space-y-3 text-gray-700">
                        <?php
                        $features = get_theme_mod('honey_features', array(
                            'Pure, raw, unfiltered honey from diverse floral sources',
                            'No antibiotics, pesticides, or artificial additives',
                            'Seasonal varieties reflecting different flowering cycles',
                            'Careful extraction to preserve natural enzymes and nutrients'
                        ));

                        foreach ($features as $feature):
                        ?>
                            <li class="flex items-start">
                                <span class="text-amber-600 mr-2">•</span>
                                <span><?php echo $feature; ?></span>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
                
                <a 
                    href="https://wa.me/<?php echo get_theme_mod('whatsapp_number', '8801729809879'); ?>" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="btn-primary"
                >
                    <?php _e('Order Organic Honey', 'paharbari'); ?>
                </a>
            </div>
            
            <div>
                <div class="rounded-lg overflow-hidden shadow-lg mb-8">
                    <img 
                        src="<?php echo get_theme_mod('bee_hive_image', get_template_directory_uri() . '/assets/images/bee-hive.jpg'); ?>" 
                        alt="Beehives at PaharBari Organics" 
                        class="w-full h-auto"
                    />
                </div>
                
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h4 class="font-medium text-xl mb-4 text-amber-700">
                        <?php echo get_theme_mod('harvest_calendar_title', 'Honey Harvesting Calendar'); ?>
                    </h4>
                    <div class="grid grid-cols-3 sm:grid-cols-4 gap-3">
                        <?php
                        $months = array(
                            array('name' => 'January', 'yield' => 'Low', 'color' => 'bg-amber-100'),
                            array('name' => 'February', 'yield' => 'Low', 'color' => 'bg-amber-100'),
                            array('name' => 'March', 'yield' => 'Medium', 'color' => 'bg-amber-300'),
                            array('name' => 'April', 'yield' => 'High', 'color' => 'bg-amber-500'),
                            array('name' => 'May', 'yield' => 'High', 'color' => 'bg-amber-500'),
                            array('name' => 'June', 'yield' => 'Medium', 'color' => 'bg-amber-300'),
                            array('name' => 'July', 'yield' => 'Low', 'color' => 'bg-amber-100'),
                            array('name' => 'August', 'yield' => 'Very Low', 'color' => 'bg-amber-50'),
                            array('name' => 'September', 'yield' => 'Very Low', 'color' => 'bg-amber-50'),
                            array('name' => 'October', 'yield' => 'Low', 'color' => 'bg-amber-100'),
                            array('name' => 'November', 'yield' => 'Medium', 'color' => 'bg-amber-300'),
                            array('name' => 'December', 'yield' => 'Medium', 'color' => 'bg-amber-300')
                        );

                        foreach ($months as $month):
                        ?>
                            <div class="p-3 rounded-lg <?php echo $month['color']; ?> text-center">
                                <p class="font-medium text-amber-900"><?php echo $month['name']; ?></p>
                                <p class="text-sm text-amber-800"><?php echo $month['yield']; ?></p>
                            </div>
                        <?php endforeach; ?>
                    </div>
                    <p class="mt-4 text-sm text-gray-600">
                        <?php echo get_theme_mod('harvest_calendar_note', '* Yield levels indicate relative honey production throughout the year based on flowering seasons and weather conditions.'); ?>
                    </p>
                </div>
            </div>
        </div>
        
        <div class="bg-amber-100 p-8 rounded-lg">
            <div class="text-center mb-8">
                <h3 class="text-2xl font-heading font-medium mb-2 text-amber-900">
                    <?php echo get_theme_mod('expansion_title', 'Our Expansion Plan'); ?>
                </h3>
                <p class="text-amber-800">
                    <?php echo get_theme_mod('expansion_subtitle', 'From 60 to 100+ bee hives over the next two years'); ?>
                </p>
            </div>
            
            <div class="relative h-8 bg-white rounded-full overflow-hidden mb-4">
                <div class="absolute top-0 left-0 h-full w-3/5 bg-amber-500 rounded-full"></div>
                <div class="absolute top-0 left-0 w-full h-full flex items-center justify-between px-4">
                    <span class="text-xs font-medium">
                        <?php echo get_theme_mod('current_hives', 'Current: 60 hives'); ?>
                    </span>
                    <span class="text-xs font-medium">
                        <?php echo get_theme_mod('goal_hives', 'Goal: 100+ hives'); ?>
                    </span>
                </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <?php
                $phases = array(
                    array(
                        'title' => 'Phase 1',
                        'target' => '60 → 75 hives',
                        'timeline' => 'By end of 2025'
                    ),
                    array(
                        'title' => 'Phase 2',
                        'target' => '75 → 90 hives',
                        'timeline' => 'By mid 2026'
                    ),
                    array(
                        'title' => 'Phase 3',
                        'target' => '90 → 100+ hives',
                        'timeline' => 'By end of 2026'
                    )
                );

                foreach ($phases as $phase):
                ?>
                    <div class="bg-white p-4 rounded-lg shadow-sm">
                        <h4 class="font-medium text-amber-800 mb-2"><?php echo $phase['title']; ?></h4>
                        <p class="text-amber-700"><?php echo $phase['target']; ?></p>
                        <p class="text-sm text-gray-600 mt-2"><?php echo $phase['timeline']; ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>