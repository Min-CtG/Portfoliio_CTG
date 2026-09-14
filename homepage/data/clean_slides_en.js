window.cleanGeneratedSlidesEn = [
    {
        "title": "Step 1: Initialization",
        "body": [
            "-SfM (Structure from Motion): Find common feature points between 2D images and create an approximate 3D point cloud",
            "-Initial Gaussian placement: Place an initial Gaussian in the shape of a round sphere at each created 3D point.",
            "-Feature point extraction: Automatically identifies landmark points by comparing images taken from multiple angles"
        ]
    },
    {
        "title": "Step 2: Rendering (Splatting)",
        "body": [
            "-Tile-based 2D projection: Draw a picture by projecting (splat) ellipsoids in 3D space onto a 2D screen.",
            "-Error measurement: Calculate error (loss) by comparing the drawn virtual image and the actual original image in pixel units",
            "-Alpha blending: Complete the final pixel color by overlapping color and transparency from the front Gaussian to the back Gaussian."
        ]
    },
    {
        "title": "Step 3: Optimization and density control (Optimization)",
        "body": [
            "-Parameter fine tuning: Precisely update the position, size, rotation, transparency, and color of each Gaussian based on the calculated error.",
            "-Density control (Clone/Split): In areas where detail is lacking, the resolution is improved by cloning or splitting the Gaussian.",
            "- Removal of unnecessary data (Pruning): Delete ghost Gaussians that are not visible on the screen due to low transparency or are unnecessary."
        ]
    },
    {
        "title": "Optimization iteration process",
        "body": [
            "-Parallel processing: Steps 1 and 2 (rendering and error calculation) proceed dynamically simultaneously in the pipeline.",
            "-15,000 ~ 30,000 Iteration: Stop density control and fine-tune only parameters such as position, size, color, and opacity to minimize errors.",
            "-Termination condition: Training is finally completed when 30,000 iterations are reached or the error with the photo is not reduced any further and converges."
        ]
    },
    {
        "title": "Point Cloud (5%)",
        "body": [],
        "isSpecial3D": "show5Percent"
    },
    {
        "title": "Point Cloud (30%)",
        "body": [],
        "isSpecial3D": "show30Percent"
    },
    {
        "title": "Point Cloud (150%)",
        "body": [],
        "isSpecial3D": "show150Percent"
    },
    {
        "title": "Original 2D Photo",
        "body": [],
        "isSpecial3D": "show2DImage"
    },
    {
        "title": "3D GAUSSIAN SPLATTING",
        "subtitle": "SURVEY, TECHNOLOGIES, CHALLENGES, AND OPPORTUNITIES",
        "body": []
    },
    {
        "title": "1. Core concepts of 3DGS",
        "body": [
            "-Explicit 3D representation: Quickly convert multi-angle 2D photos into explicit 3D ellipsoids",
            "- Achieve real-time rendering: Real-time high-quality rendering without interruption even from a new viewpoint (novel view) in addition to fast learning speed.",
            "-Next-generation mainstream technology: Overcoming the speed limitations of existing NeRF and presenting a new paradigm in the 3D graphics/vision field"
        ]
    },
    {
        "title": "2. Scope of analysis of the paper",
        "body": [
            "-Systematic analysis of three core classifications: Optimization, Applications, and Technology Extensions",
            "-9 major detailed optimization: Summary of the latest paper flow in 9 fields including initialization, structure, density control, and rendering",
            "-All-round review: Summary of application cases in a wide range of fields, from single subject restoration to large-scale scenes and dynamic object movement"
        ]
    },
    {
        "title": "3. Technology limitations and future opportunities",
        "body": [
            "-Facing current limitations: Analysis of technical limitations such as incomplete data, generalization limitations, absence of physical laws, excessive memory, etc.",
            "-Solution direction: Proposing a solution through the latest research flow and convergence technology (Diffusion, etc.) to overcome this problem",
            "-Future vision: Exploration of commercialization roadmap through real-world physical interaction and highly compressed, lightweight model"
        ]
    },
    {
        "title": "OPTIMIZATION OF 3DGS",
        "body": [
            "<strong>Optimization direction to overcome the limitations of 3D Gaussian splatting</strong>",
            "To overcome the limitations of existing 3DGS, we systematically classify four major optimization research directions (efficiency, realism, generalization, and sparse viewpoints) underway in academia."
        ]
    },
    {
        "title": "Four Key Pillars of 3DGS Optimization",
        "isSpecial3D": "fourBoxes",
        "body": [
            "<div style='display: flex; gap: 20px; width: 100%; max-width: 1300px; justify-content: center; flex-wrap: nowrap;'>",
            "<div style='flex: 1; background: rgba(220, 240, 255, 0.8); border: 1px solid rgba(0, 120, 255, 0.2); border-top: 4px solid var(--primary-color); padding: 1.5rem; border-radius: 8px; box-shadow: 0 10px 20px rgba(0,0,0,0.1);'>",
            "<h3 style='color: #1a1a1a; font-size: 1.3rem; margin-bottom: 0.3rem;'>A. Efficiency</h3>",
            "<p style='color: var(--primary-color); font-family: var(--font-tech); font-size: 0.85rem; margin-bottom: 1rem; letter-spacing: 1px;'>Efficiency</p>",
            "<p style='font-size: 1rem; color: #1a1a1a; word-break: keep-all; line-height: 1.6;'>Reduce huge memory usage, compress storage capacity dozens of times, and maximize rendering framerate</p>",
            "</div>",
            "<div style='flex: 1; background: rgba(220, 240, 255, 0.8); border: 1px solid rgba(0, 120, 255, 0.2); border-top: 4px solid var(--primary-color); padding: 1.5rem; border-radius: 8px; box-shadow: 0 10px 20px rgba(0,0,0,0.1);'>",
            "<h3 style='color: #1a1a1a; font-size: 1.3rem; margin-bottom: 0.3rem;'>B. Realism</h3>",
            "<p style='color: var(--primary-color); font-family: var(--font-tech); font-size: 0.85rem; margin-bottom: 1rem; letter-spacing: 1px;'>Photorealism</p>",
            "<p style='font-size: 1rem; color: #1a1a1a; word-break: keep-all; line-height: 1.6;'>Eliminates aliasing and fully restores reflective surfaces when zooming in or out.</p>",
            "</div>",
            "<div style='flex: 1; background: rgba(220, 240, 255, 0.8); border: 1px solid rgba(0, 120, 255, 0.2); border-top: 4px solid var(--primary-color); padding: 1.5rem; border-radius: 8px; box-shadow: 0 10px 20px rgba(0,0,0,0.1);'>",
            "<h3 style='color: #1a1a1a; font-size: 1.3rem; margin-bottom: 0.3rem;'>C. Generalization</h3>",
            "<p style='color: var(--primary-color); font-family: var(--font-tech); font-size: 0.85rem; margin-bottom: 1rem; letter-spacing: 1px;'>Generalizable</p>",
            "<p style='font-size: 1rem; color: #1a1a1a; word-break: keep-all; line-height: 1.6;'>Combined foundation model to instantly infer 3D Gaussian parameters from single/few image inputs</p>",
            "</div>",
            "<div style='flex: 1; background: rgba(220, 240, 255, 0.8); border: 1px solid rgba(0, 120, 255, 0.2); border-top: 4px solid var(--primary-color); padding: 1.5rem; border-radius: 8px; box-shadow: 0 10px 20px rgba(0,0,0,0.1);'>",
            "<h3 style='color: #1a1a1a; font-size: 1.3rem; margin-bottom: 0.3rem;'>D. Sparse views</h3>",
            "<p style='color: var(--primary-color); font-family: var(--font-tech); font-size: 0.85rem; margin-bottom: 1rem; letter-spacing: 1px;'>Sparse Views</p>",
            "<p style='font-size: 1rem; color: #1a1a1a; word-break: keep-all; line-height: 1.6;'>Even in very small conditions where there are only 3 or 4 photos, the diffusion model is used to fill in invisible areas.</p>",
            "</div>",
            "</div>"
        ]
    },
    {
        "title": "Optimization Part A: Efficiency",
        "body": [
            "-Revolutionary reduction of Gaussian memory capacity: Compressing and optimizing the huge capacity occupied by millions of Gaussian points",
            "-Reduced rendering speed and computation amount: Algorithm improvements to further increase real-time processing speed",
            "-Optimized hardware acceleration: Achieved lightweight so that it can run on mobile devices or in low-end environments."
        ]
    },
    {
        "title": "Methodology Comparison",
        "body": [
            "<table><thead><tr><th>Methodology</th><th>Picture quality (PSNR)</th><th>Capacity (Size MB)</th><th>Key Features</th></tr></thead><tbody><tr><td>Vanilla 3DGS</td><td>27.49 dB</td><td>744.7 MB</td><td>Base capacity (reference point)</td></tr><tr><td>Scaffold-GS</td><td>27.50 dB</td><td>253.9 MB</td><td>Approximately 3x compression (anchor point structuring)</td></tr><tr><td>Compact3D</td><td>27.16 dB</td><td>50.3 MB</td><td>Approximately 15x compression (quantization applied)</td></tr><tr><td>LightGaussian</td><td>27.00 dB</td><td>44.5 MB</td><td>Approximately 17x compression (removes unnecessary points)</td></tr><tr><td><strong>HAC (latest SOTA)</strong></td><td><strong>27.53 dB</strong></td><td><strong>15.3 MB</strong></td><td><strong>48x compression (combined hash grid)</strong></td></tr></tbody></table>"
        ]
    },
    {
        "title": "Difficulties of 3D compression and the core idea of ​​HAC",
        "body": [
            "-2D image (easy compression): Pixels are next to each other like a checkerboard grid, so it is easy to use the surrounding information that 'the pixel next to it will also be a similar color.'",
            "-3D Gaussian (difficult compression): Points are randomly scattered in the air and have no order or connection rules, making it very difficult to understand surrounding relationships.",
            "-HAC's magical solution: Create a location hint by covering the 3D space with a virtual grid (hash grid), and achieve ultra-compression by AI predicting properties accurately with a 99% probability."
        ]
    },
    {
        "title": "HAC (Hybrid Anchor Compression)",
        "body": []
    },
    {
        "title": "The three core pillars that make up HAC",
        "body": [
            "-1.Scaffold-GS (structuring): Manages millions of randomly scattered points by grouping them in an orderly manner with an 'Anchor', a representative reference point.",
            "-2.Instant-NGP (Hash Grid): Lightning-fast and light extraction of anchors' surrounding spatial location hints through a multi-resolution 3D grid.",
            "-3.Learned Compression: Based on extracted spatial hints, an artificial neural network precisely predicts anchor characteristics and reduces capacity to the limit."
        ]
    },
    {
        "title": "3D spatial voxelization visualization",
        "body": [
            "- Scaffold-GS mechanism: Generates a regular voxel grid surrounding a 3D Gaussian point cloud."
        ],
        "isSpecial3D": "voxelGrid"
    },
    {
        "title": "Anchor Point Placement Visualization",
        "body": [
            "- Anchor planting: Place a small, clear anchor point at the center of each voxel to complete structuring the surrounding space."
        ],
        "isSpecial3D": "anchorPoints"
    },
    {
        "title": "Anchor Feature Vector",
        "body": [
            "<p style='font-size: 1.05rem; line-height: 1.6;'><strong>Reference Position:</strong> Basecamp coordinates indicating where this anchor is embedded in 3D space.</p>",
            "<p style='font-size: 1.05rem; line-height: 1.6;'><strong>Shape and Property Inference:</strong> Contains 'blueprint-like data' to calculate what size, direction (e.g., squiggly shape), and color the surrounding Gaussians should expand into.</p>"
        ],
        "isSpecial3D": "anchorFeature"
    },
    {
        "title": "1. 3 core mechanisms of Scaffold-GS",
        "body": [
            "-Anchor point placement: Divide the space into voxel blocks and install a reference anchor point at the center to prevent the points from scattering.",
            "-Neural network-based child generation: Instead of one anchor having all the information, a small neural network smartly derives baby Gaussians around it based on hints.",
            "-View-dependent filtering: Maximize computational efficiency by hiding baby Gaussians in areas that are not visible or obscured from the current camera view."
        ]
    },
    {
        "title": "1. Scaffold-GS Details 1: Voxelization of 3D space",
        "body": [
            "-Space division: Since it is impossible to manage if the randomly scattered points are left as is, the space is divided into a regular Lego block (Voxel) grid.",
            "-Planting an anchor flag: Plants an anchor point as if planting a flag at the center of each block where an object exists.",
            "-Strong advantage of structuring: By managing only a few anchors instead of millions of points, data is organized and unnecessary memory waste is prevented."
        ]
    },
    {
        "title": "1. Scaffold-GS Details 2: Mother Anchor and Baby Gaussian",
        "body": [
            "-Information Seed Anchor: The anchor itself is not drawn, but acts as a seed containing key summary information about the surrounding environment.",
            "-Neural network-based derivation: A very lightweight neural network (MLP) reads seed information and instantly creates baby Gaussians necessary for actual rendering.",
            "-The secret to compression efficiency: There is no need to store all Gaussian properties on the hard disk, but only a few anchors are stored, dramatically reducing capacity."
        ]
    },
    {
        "title": "1. Scaffold-GS Details 3: Derivation and Backpropagation Mechanism",
        "body": [
            "-Calculation of error (loss): When I tried to draw a virtual screen with the anchor information I had, errors occurred in the color and shape on a pixel basis compared to the actual original photo.",
            "-Learning (Optimization): Anchor feature vectors, which were initially random, are modified at every moment to reduce errors through backpropagation.",
            "-Result confirmation: The anchor is learned by referring to the relationship with neighboring anchors and is finally confirmed as perfectly refined net anchor data."
        ]
    },
    {
        "title": "1. Effects achieved by introducing Scaffold-GS",
        "body": [
            "-3x basic capacity reduction: Achieve perfect structuring of disordered data, reducing capacity from 744MB ➔ 253MB (1/3 lighter without loss of image quality).",
            "-A solid stepping stone for subsequent compression: By aligning random points with regular anchors, we create the perfect environment for hash grid and neural network compression techniques to work."
        ]
    },
    {
        "title": "Limitations of Scaffold-GS → Instant-NGP combination",
        "body": [
            "-Limitations of Scaffold-GS: Even though the number of anchors is reduced, each anchor still needs to store a high-capacity feature tensor of around 32 dimensions independently, resulting in 250MB.",
            "-HAC's solution (combining Instant-NGP): Instead of anchors holding features directly, they share a multi-resolution hash grid that covers the entire space.",
            "- Ultra-lightweight parameters: By retrieving features by looking up the anchor's coordinates in a hash table, hundreds of thousands of tensors are replaced with a very small fixed-size hash table."
        ]
    },
    {
        "title": "Instant-NGP Hash Grid Visualization",
        "body": [
            "- Spatial Hashing: Massive 3D coordinates are compressed into a 1D hash table, functioning as a high-performance hint map."
        ],
        "isSpecial3D": "instantGrid"
    },
    {
        "title": "2. Three core technologies of Instant-NGP",
        "body": [
            "-Multi-resolution grid: Simultaneously capture large backgrounds and fine details by overlapping multiple layers of 3D checkerboard, from a large grid to an ultra-fine grid.",
            "-Spatial Hashing: Prevent memory explosion by discarding empty spaces and compressing and converting only the coordinates of objects into a small hash table.",
            "-Trilinear Interpolation: Smoothly mixes information from eight corner vertices in proportion to the distance to naturally derive the value at any position within the grid."
        ]
    },
    {
        "title": "2. Instant-NGP Detail 1: Multi-Resolution Magnifier",
        "body": [
            "-Dilemma of a single grid: If the grid is too large, fine wrinkles cannot be captured, and if it is too small, the memory explodes.",
            "-Magnifying glass zoom-in design: Perfectly solves the dilemma by stacking multiple layers of resolution from a coarse grid to a fine grid.",
            "-Fusing large backgrounds and fine textures: The coarse grid captures the overall structure of the room, while the dense grid captures high-frequency details such as edges and letters."
        ]
    },
    {
        "title": "2. Effects achieved by introducing Instant-NGP",
        "body": [
            "-0.1ms ultra-fast spatial feature extraction: Maximize speed by replacing heavy neural network models with lightweight lookup tables.",
            "-Completely eliminates computational bottlenecks: Instantly finds spatial hints in 0.1ms from a hash table, without having to resort to a heavy neural network with dozens of layers.",
            "-Provides key hints for HAC compression: 100% fast and complete supply of spatial context for where each anchor point is located in 3D space."
        ]
    },
    {
        "title": "Entropy Compression & Hint Restoration Visualization",
        "body": [
            "- Bitcode Transformation: Anchor data is compressed into variable-length bitcodes based on frequency, and perfectly restored via hints."
        ],
        "isSpecial3D": "entropyCoding"
    },
    {
        "title": "3. Neural network-based entropy compression module",
        "body": [
            "-1.Nonlinear transformation: Removes clutter from complex data and extracts only core compressed information through an autoencoder structure.",
            "-2.Adaptive quantization: Rounding successive real decimal numbers to an integer step to simplify the type of information and convert it to make it easier to compress.",
            "-3.Entropy modeling: AI precisely predicts the probability distribution (mean, variance) of a specific value appearing without error by looking at the hash grid space hint.",
            "-4.Arithmetic coding: Lossless extreme compression by assigning very short bits to obvious values ​​with high prediction probability."
        ]
    },
    {
        "title": "3. Neural network compression details 1: Tug of war between image quality and capacity",
        "body": [
            "-Learning the scene itself without external prior data: Optimize by looking at the 3D scene itself that is currently being restored, without the need for pre-training with tens of thousands of pieces of 3D data.",
            "-End-to-End simultaneous training: Perform 3DGS rendering quality training and entropy bit reduction training simultaneously in the pipeline.",
            "-Golden Ratio (Rate-Distortion): The AI ​​itself uses bits in detail areas, and smartly adjusts to save bits in flat empty areas to the extreme."
        ]
    },
    {
        "title": "3. Neural Network Compression Details 2: Adaptive Quantization and STE",
        "body": [
            "- Simplify consecutive decimals into integers: Precise decimal data takes up a lot of space in computers, so it is rounded to a constant integer scale through quantization.",
            "-Overcoming the non-differentiable problem (STE): Simple rounding causes a fatal problem in that mathematical training (backpropagation) is interrupted.",
            "-Soft noise fusion: During training, soft noise is slightly mixed to allow training to proceed normally, and a clever technique is applied to convert it to a perfect integer only during final storage."
        ]
    },
    {
        "title": "3. Neural network compression details 3: Probability distribution precision estimation",
        "body": [
            "-The core of information theory: The general principle of compression is to use only 0.1 bits for data that has a 99% probability of coming out, and to use long bits only for unexpected and rare data.",
            "-Hash grid-based prediction: The neural network examines the spatial hints provided by the NGP hash grid and estimates the probability distribution of anchor properties without error.",
            "-Customized infinitesimal bit allocation: Extremely low bit consumption by accurately predicting 'This anchor is on a red sofa, so there is a 98% chance that it is red.'"
        ]
    },
    {
        "title": "3. Neural network compression details 4: Lossless arithmetic coding",
        "body": [
            "-Arithmetic Coding: Introducing the strongest lossless digital compression method in existence that approaches the Shannon entropy limit by 99.9%.",
            "- Encoding the entire data: Going beyond simple character-by-character compression, encoding the entire data sequence into one huge decimal point interval between 0 and 1.",
            "-Restore without even 1% image quality distortion: Reversely uses the bit stream and hints saved during decompression to restore 100% of the original integer, preventing any source of image quality degradation."
        ]
    },
    {
        "title": "3D spatial voxelization visualization",
        "body": [
            "- Scaffold-GS mechanism: Generates a regular voxel grid surrounding a 3D Gaussian point cloud."
        ],
        "isSpecial3D": "voxelGrid"
    },
    {
        "title": "Anchor Point Placement Visualization",
        "body": [
            "- Anchor planting: Place a small, clear anchor point at the center of each voxel to complete structuring the surrounding space."
        ],
        "isSpecial3D": "anchorPoints"
    },
    {
        "title": "Anchor Feature Vector",
        "body": [
            "<p style='font-size: 1.05rem; line-height: 1.6;'><strong>Reference Position:</strong> Basecamp coordinates indicating where this anchor is embedded in 3D space.</p>",
            "<p style='font-size: 1.05rem; line-height: 1.6;'><strong>Shape and Property Inference:</strong> Contains 'blueprint-like data' to calculate what size, direction (e.g., squiggly shape), and color the surrounding Gaussians should expand into.</p>"
        ],
        "isSpecial3D": "anchorFeature"
    },
    {
        "title": "Instant-NGP Hash Grid Visualization",
        "body": [
            "- Spatial Hashing: Massive 3D coordinates are compressed into a 1D hash table, functioning as a high-performance hint map."
        ],
        "isSpecial3D": "instantGrid"
    },
    {
        "title": "Entropy Compression & Hint Restoration Visualization",
        "body": [
            "- Bitcode Transformation: Anchor data is compressed into variable-length bitcodes based on frequency, and perfectly restored via hints."
        ],
        "isSpecial3D": "entropyCoding"
    },
    {
        "title": "Achievement achieved by neural network entropy compression",
        "body": [
            "-Achieved ultra-light weight of 15MB: Achieved an overwhelming 48x compression rate without deteriorating image quality and dramatically reduced the original file size from 744MB ➔ 15MB.",
            "-PSNR 27.53dB Mercury: Maintains the quality of the actual image quality, which is slightly clearer than the original 3DGS (27.49dB).",
            "-Commercialization of web and mobile streaming: 3D scenes can be downloaded in 1 second and run in real time using a web browser in a mobile environment without a dedicated program."
        ]
    },
    {
        "title": "Summary of HAC 3-stage integrated pipeline",
        "body": [
            "-1.Scaffold-GS (structuring step): Organizes irregular 3D Gaussian points systematically by anchoring them in regular voxel space.",
            "-2.Instant-NGP (Spatial Context Extraction): Quickly and lightly acquires spatial features around anchor coordinates with a multi-resolution hash grid.",
            "-3.Learned Compression (Entropy Super Compression): Probability is precisely estimated using extracted hints, arithmetic-coded, and packed into the final 15MB without loss of image quality."
        ]
    },
    {
        "title": "Optimization Direction B: Photorealism",
        "body": [
            "-Overcoming the limitations of realism: Basic 3DGS only learns static lighting and is vulnerable to broken boundaries or expression of reflective materials when zooming in.",
            "-Anti-aliasing: Maintain smooth textures and outlines that are not broken even when distance or resolution changes.",
            "-Combined with Physically Based Rendering (PBR): Naturally reflects new lighting environments and complex reflective materials (mirrors, metals, etc.)"
        ]
    },
    {
        "title": "1. Mip-Splatting: Anti-aliasing",
        "body": [
            "-Aliasing: The screen sizzles when the camera zooms in/out or the resolution changes.",
            "-Nyquist frequency (Nyquist) limit: Need to resolve high-frequency noise that occurs when details exceed the sampling limit are broken",
            "-Introduction of 3D smoothing filter: Applying filtering technology to limit frequency bandwidth by improving Gaussian projection method"
        ]
    },
    {
        "title": "1. Mip-Splatting: Introduction Effect",
        "body": [
            "-Scale-invariant: Always maintain consistent and clean quality regardless of camera distance",
            "- Preserve subpixel detail: even the thinnest structures, such as hair or leaves, do not disappear or flicker on screen.",
            "- Dramatic image quality innovation: 3DGS achieves smooth anti-aliasing quality at the level of commercial graphics engines."
        ]
    },
    {
        "title": "2. GaussianShader: Separation of light and material",
        "body": [
            "-Limitations of baked-in color: The lighting conditions in the original photo are baked into Gaussian points, making it awkward to change the lighting.",
            "-Introduction of PBR pipeline: Learning by decomposing the surface of an object into light reflectance (Albedo), roughness (Roughness), and metallicity (Metallic)",
            "-Surface Normal Combination: Combines the structural gradient of a 3D Gaussian with a physical formula to accurately calculate the angle at which light bounces."
        ]
    },
    {
        "title": "2. GaussianShader: Physically-based rendering",
        "body": [
            "-Relighting (dynamic lighting): Shadows and reflections are rendered naturally even when the position or color of the light source is freely changed in the virtual environment.",
            "-Complex texture expression: realistic depiction of materials with strong reflection and refraction of light, such as glass, mirror, and polished metal",
            "-Metaverse compatibility: Maximizes use as a 3D asset by reacting to the surrounding lighting environment in real time"
        ]
    },
    {
        "title": "3. GaussianPro: 2D-3D progressive propagation",
        "body": [
            "-Inducing surface alignment: Guiding Gaussian points floating in the air to be aligned along the actual surface of the object.",
            "-Connection of points and planes: Going beyond individual point-level rendering, implementing plane-level rendering that spreads along the surface.",
            "-Improved depth accuracy: Align depth and normal maps with Gaussians to obtain much smoother 3D geometry"
        ]
    },
    {
        "title": "Optimization Direction C: Generalizable",
        "body": [
            "-Existing limitations (Per-scene Optimization): For each new scene, the model must be trained again from the beginning for several hours to tens of minutes.",
            "-Introduction of foundation model: Shorten the optimization process for each scene by using a large AI model pre-trained on a massive 3D dataset",
            "-Zero-shot 3D creation: AI immediately deduces 3D Gaussian parameters by inputting just 1-2 photos you have never seen before."
        ]
    },
    {
        "title": "1. Splatter Image: Direct image projection",
        "body": [
            "-2D-to-3D shaping: Pass 2D images through a neural network to directly predict the corresponding 3D Gaussian parameters on a pixel-by-pixel basis",
            "-Multi-view fusion: When multiple photos are input, spatial consistency is maintained by analyzing overlapping areas.",
            "-Fast inference speed: Immediate 3D results produced using a feed-forward method without complex mathematical optimization"
        ]
    },
    {
        "title": "1. Splatter Image: Utilization of spherical harmonic function",
        "body": [
            "-Spherical harmonic function (SH) prediction: Learn SH coefficients together to express light reflection (Specular) and shadows that vary depending on the viewing angle",
            "-Occlusion processing: AI understands the context and naturally fills in color and shape on the back of an object not captured in the photo.",
            "-Real-time parameter creation: Presents the possibility to immediately convert photos taken with a mobile camera into 3D objects"
        ]
    },
    {
        "title": "2. MVSplat: Building Cost Volume",
        "body": [
            "-Cost Volume concept: Compare images from multiple viewpoints geometrically to construct spatial depth information in three dimensions",
            "-Epipolar Geometry: Mathematically calculates which line a pixel from one camera lies on in another camera.",
            "-High structural accuracy: much more robust understanding of geometric structure than simple image-based models (Splatter Image)"
        ]
    },
    {
        "title": "3. Triplane & Transformer",
        "body": [
            "-Triplane orthogonal projection: Learn efficiently by compressing 3D space into three 2D planes (XY, YZ, ZX) to prevent 3D memory explosion.",
            "-Large-scale 3D creation: Learn and predict geometric patterns in massive datasets using Transformer model structure",
            "-Result: Completion of a generalized 3DGS paradigm that reproduces perfect light sources and textures without gaps no matter what angle the camera is rotated."
        ]
    },
    {
        "title": "Optimization Direction D: Sparse Views",
        "body": [
            "-Data shortage phenomenon: If there are not dozens of detailed photos, the screen may be broken or the Gaussian will become elongated (artifact).",
            "-Overcoming Few-Shot Rendering: Research to build a perfectly filled 3D scene with only 3-4 photos",
            "-Generative AI fusion: Naturally restores invisible occlusion with the imagination of the diffusion model"
        ]
    },
    {
        "title": "1. FSGS: Single image depth estimation",
        "body": [
            "-Prevention of overfitting: Prevents the phenomenon of Gaussian being learned sharply only in the camera direction when there is not enough viewpoint",
            "-Depth Prior: Infer the approximate structure of the scene using pre-trained single image depth estimation AI (Monocular Depth).",
            "-Stable initialization: prevents Gaussians from being randomly generated in empty space and places points on the surface predicted by AI"
        ]
    },
    {
        "title": "1. FSGS: Diffusion model fusion",
        "body": [
            "-Inpainting: A 2D Diffusion model creates a texture for the back or hidden part of an object that was not captured by the camera.",
            "-SDS (Score Distillation Sampling): Transfers generative AI knowledge to 3D space to naturally fill the shape and color of empty space",
            "-Accessibility for general users: Seamless 3D scanning is possible with just a few photos taken with a smartphone."
        ]
    },
    {
        "title": "3DGS main applications (Applications)",
        "body": [
            "-Expansion across industries: Optimized 3DGS technology is rapidly being applied to various real industrial fields beyond simple demonstrations.",
            "-Advantages of real-time rendering: Penetrate into dynamic environments that existing NeRF could not enter based on high FPS and ease of editing",
            "-Main fields: dynamic objects (Dynamic 3DGS), digital humans (Avatar), real-time robot mapping (SLAM)"
        ]
    },
    {
        "title": "1. Dynamic 3DGS (Dynamic Object Rendering)",
        "body": [
            "-Added time dimension: Render moving people or dynamic animals as 4D videos, rather than static 3D models.",
            "-Deformation Field: Additional information on how the position, rotation, and size of existing Gaussians change (movement) over time.",
            "-Memory efficiency: Optimized by storing only the reference frame and movement trajectory rather than storing each frame separately as a 3D model."
        ]
    },
    {
        "title": "2. Digital Avatar (digital human)",
        "body": [
            "-Ultra-realistic avatar creation: Extremely realistic expression of a person's subtle facial expression muscles, strands of hair, and skin texture",
            "-Real-time operation (VR/AR): Real-time (60fps or more) interaction can be driven on metaverse devices while requiring complex rendering",
            "-Audio/Motion Linkage: Synchronize with audio or motion capture data to enable the avatar to speak and move naturally"
        ]
    },
    {
        "title": "3. SLAM (Simultaneous Location Estimation and Mapping)",
        "body": [
            "-Application of robots and autonomous driving: When a robot or vehicle moves with a camera, the surrounding environment is mapped into a 3D map in real time.",
            "-Fast convergence speed: The existing NeRF SLAM had a slow optimization speed, which resulted in poor real-time performance, but 3DGS can build the surrounding environment immediately upon movement.",
            "-Photorealistic mapping: Rather than a simple skeleton map created with sensor data (LiDAR), it visually provides 3D space with perfect high-definition photo quality."
        ]
    },
    {
        "title": "Future technology expansions (Extensions)",
        "body": [
            "-Breaking the limits of 3DGS structure: Frontier studies exploring new possibilities by modifying the Gaussian ellipsoid structure in the form of a point cloud",
            "- Combination with physics engine: Active research on physics simulation in which 3DGS objects collide, break, or bounce against each other in game engines",
            "-Main expansion technologies: SuGaR (mesh extraction), 2DGS (2D surface splatting)"
        ]
    },
    {
        "title": "1. SuGaR: 3D mesh extraction",
        "body": [
            "-Resolving engine compatibility issues: 3DGS is in the form of a cloud with volume, so it is difficult to compatibility with the physics engines of existing game engines (Unity, Unreal)",
            "-Surface alignment induction: Rendering by forcing Gaussian points scattered in space to stick flat to the actual surface of the object.",
            "-Mesh conversion successful: Achieving animation and physical rigging by extracting a traditional polygon mesh from aligned Gaussians."
        ]
    },
    {
        "title": "2. 2DGS (2D Gaussian Splatting)",
        "body": [
            "-Extreme flattening of the ellipsoid: Extremely transforming the 3D ellipsoid into a very thin 2D disk (disk) and placing it in space.",
            "-Thickness noise removal: Removes noise caused by overlapping volumetric ellipsoids and expresses the surface of the object in a precise and smooth manner.",
            "-Perfect texture reproduction: Much more accurate reproduction of light reflections and surface textures, perfectly aligned with the game engine's standard rendering pipeline."
        ]
    },
    {
        "title": "Conclusion",
        "body": [
            "-Complete replacement of NeRF: 3D Gaussian Splatting (3DGS) is ending the NeRF paradigm with the overwhelming advantage of real-time high-definition rendering.",
            "-Explosive expansion of the ecosystem: Derivative research that overcomes the limitations of early models, such as compression (HAC), generalization (pixelSplat), and physics linking (SuGaR), has emerged explosively.",
            "-Future of spatial computing: It will be firmly established as a core visualization-based technology in the spatial computing era, including the upcoming metaverse, autonomous driving 3D simulation, and digital twin."
        ]
    }
];
