<?php
/**
 * Template part for displaying the eco escape section
 */
?>

<section id="eco-escape" class="section-padding relative" style="background: linear-gradient(rgba(31, 41, 55, 0.8), rgba(31, 41, 55, 0.8)), url('<?php echo get_theme_mod('eco_escape_background', get_template_directory_uri() . '/assets/images/eco-escape-bg.jpg'); ?>'); background-size: cover; background-position: center; background-attachment: fixed;">
    <div class="container-custom relative z-10">
        <div class="mb-12 text-center">
            <h2 class="section-title text-white">
                <?php echo get_theme_mod('eco_escape_title', 'Naikkhon Eco Escape'); ?>
            </h2>
            <p class="text-lg text-green-50 max-w-3xl mx-auto">
                <?php echo get_theme_mod('eco_escape_subtitle', 'Experience the serene beauty of our eco-resort project, offering sustainable accommodation in harmony with nature.'); ?>
            </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="text-white">
                <h3 class="text-2xl font-heading font-medium mb-4">
                    <?php echo get_theme_mod('eco_escape_heading', 'A Sanctuary in Nature'); ?>
                </h3>
                <div class="prose prose-invert mb-8">
                    <?php echo wpautop(get_theme_mod('eco_escape_description', 'Nestled within our organic farm, Naikkhon Eco Escape offers a unique opportunity to disconnect from the hustle of city life and reconnect with nature. Our eco-resort project features thoughtfully designed lake-side and hill-view cottages that blend seamlessly with the surrounding environment.')); ?>
                </div>
                
                <div class="flex items-center mb-6">
                    <?php get_template_part('template-parts/icons/tent'); ?>
                    <h4 class="text-xl font-medium ml-3">
                        <?php echo get_theme_mod('eco_escape_launch_text', 'Coming Soon in 2025'); ?>
                    </h4>
                </div>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <?php
                    $activities = array(
                        array(
                            'icon' => 'route',
                            'title' => 'Nature Trails',
                            'description' => 'Explore scenic paths through lush forest and hills'
                        ),
                        array(
                            'icon' => 'leaf',
                            'title' => 'Fruit Picking',
                            'description' => 'Harvest fresh seasonal fruits from our orchards'
                        ),
                        array(
                            'icon' => 'mountain',
                            'title' => 'Trekking',
                            'description' => 'Guided treks to nearby hills and viewpoints'
                        ),
                        array(
                            'icon' => 'swimming',
                            'title' => 'Lake Activities',
                            'description' => 'Enjoy swimming, fishing and boating in our lake'
                        )
                    );

                    foreach ($activities as $activity):
                    ?>
                        <div class="flex">
                            <div class="flex-shrink-0 mr-3 text-amber-400">
                                <?php get_template_part('template-parts/icons/' . $activity['icon']); ?>
                            </div>
                            <div>
                                <h4 class="font-medium mb-1"><?php echo $activity['title']; ?></h4>
                                <p class="text-green-50 text-sm"><?php echo $activity['description']; ?></p>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <img 
                    src="<?php echo get_theme_mod('eco_escape_cottage_image', get_template_directory_uri() . '/assets/images/eco-cottage.jpg'); ?>" 
                    alt="Eco cottage concept" 
                    class="w-full h-auto rounded-lg mb-6"
                />
                <h3 class="text-xl font-heading font-medium mb-3 text-green-900">
                    <?php echo get_theme_mod('eco_escape_features_title', 'Eco-Friendly Accommodations'); ?>
                </h3>
                <ul class="space-y-2 text-gray-700">
                    <?php
                    $features = get_theme_mod('eco_escape_features', array(
                        'Lake-side cottages with private decks',
                        'Hill-view cabins nestled among fruit trees',
                        'Solar-powered amenities',
                        'Farm-to-table dining experience',
                        'Community-led tours and cultural experiences'
                    ));

                    foreach ($features as $feature):
                    ?>
                        <li class="flex items-start">
                            <span class="text-green-600 mr-2">✓</span>
                            <span><?php echo $feature; ?></span>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </div>
        </div>
    </div>
</section>