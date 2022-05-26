const productData = [
    {
        title:"Joni Pink Floral Cotton Dress",
        price: 315,
        description:`Victoriana drama, but make it KITRI.
        Joni is a bestselling pink floral cotton dress. Her big sleeve energy, vintage-inspired gathering across the chest and tiered skirt remain are here to stay. Accentuate your waist with the matching belt, should you feel a little extra come evening-time.
        `,
        category: 'women',
        inventory: 28,
        imgURL:'https://cdn.shopify.com/s/files/1/0008/9748/2815/products/Joni-Pink-Floral-Cotton-Dress-by-KITRI-Studio-Front_675x.jpg?v=1643251954',
        subImg: 'https://cdn.shopify.com/s/files/1/0008/9748/2815/products/Joni-Pink-Floral-Cotton-Dress-by-KITRI-Studio_675x.jpg?v=1643251954'
    },
    {
        title: 'Florence Lilac Cotton Cardigan',
        price: 165,
        description:`The dog days are over. Cue the harp.
        Florence is a lightweight V-neck cardigan crafted from 100% cotton. So soft, just like your duvet. Cut to a slim fit, feel free to wear this warm lilac number alone or layered.`,
        category: 'women',
        inventory: 14,
        imgURL:'https://cdn.shopify.com/s/files/1/0008/9748/2815/products/Florence-Lilac-Cotton-Cardigan-by-KITRI-Studio-Front_675x.jpg?v=1643250391',
        subImg:'https://cdn.shopify.com/s/files/1/0008/9748/2815/products/Florence-Lilac-Cotton-Cardigan-by-KITRI-Studio_675x.jpg?v=1643250391'
    },
    {
        title: 'Prunella Navy Animal Spot Dress',
        price: 248,
        description:`Here's to new friends, in wild prints.
        Prunella is a navy animal spot tea dress with short, puffed sleeves and a vintage silhouette. Finished with a frilled, square neckline, just add your best boots to peek beneath the split skirt.`,
        category: 'women',
        inventory: 50,
        imgURL:'https://cdn.shopify.com/s/files/1/0008/9748/2815/products/Prunella-Navy-Animal-Spot-Dress-by-KITRI-Studio-Front_675x.jpg?v=1643253126',
        subImg:'https://cdn.shopify.com/s/files/1/0008/9748/2815/products/Prunella-Navy-Animal-Spot-Dress-by-KITRI-Studio_675x.jpg?v=1643253126'
    },
    {
        title: 'Persephone Shirred Pink Checker Dress',
        price: 283,
        description:`Meet Persephone, reimagined in a psychedelic wavy checkerboard print primed to bring joy to your dress collection. Cast in high-octane hues of pink and red, the in-house designed checkerboard design is high on our list of prints to conquer this season and beyond. Let the late summer adventures begin.        `,
        category: 'women',
        inventory: 17,
        imgURL:'https://cdn.shopify.com/s/files/1/0008/9748/2815/products/Persephone-Shirred-Pink-Checker-Dress-by-KITRI-Studio-Front_675x.jpg?v=1624025209',
        subImg:'https://cdn.shopify.com/s/files/1/0008/9748/2815/products/KITRI-Studio-Persephone-Shirred-Pink-Checker-Dress_675x.jpg?v=1624025210'
    },
    {
        title: 'Harlow Sienna Floral Mini Dress',
        price: 220,
        description:`Say howdy to this KITRI crowd favourite.
        Harlow, a sienna floral mini dress, was designed with our latest in-house drawn print. Wear with boots now, and sandals later.`,
        category: 'women',
        inventory: 46,
        imgURL:'https://cdn.shopify.com/s/files/1/0008/9748/2815/products/Harlow-Sienna-Floral-Mini-Dress-by-KITRI-Studio-Front2_675x.jpg?v=1643252362',
        subImg:'https://cdn.shopify.com/s/files/1/0008/9748/2815/products/Harlow-Sienna-Floral-Mini-Dress-by-KITRI-Studio_675x.jpg?v=1643252362'
    },
    {
        title: 'Eaton Short Sleeve Shirt',
        price: 102,
        description:'Meet the Eaton Short Sleeve Shirt, modelled here in beeswax. Constructed from a lightweight yet durable blend of 55% Hemp & 45% Organic Cotton, this smart casual shirt is ideal for summer. It features a left chest patch pocket, plastic-free Corozo nut buttons, and a central box pleat on the back for a flexible fit across the shoulders. This button-up, collared shirt offers versatility, with room for a t-shirt beneath and long enough to tuck into trousers for a smarter look.',
        category: 'men',
        inventory: 54,
        imgURL: 'https://cdn.shopify.com/s/files/1/1074/5128/products/vb1970962-SS22-shirts-lifestyle-59_2800x.jpg?v=1650631752',
        subImg:'https://cdn.shopify.com/s/files/1/1074/5128/products/vb1981940_eaton-shirt-sleeve-beeswax_1100x.jpg?v=1650631752'
    },
    {
        title: 'Eaton Long Sleeve Shirt',
        price: 16,
        description:'Meet the Eaton Long Sleeve Shirt, modelled here in ecru. Constructed from a lightweight yet durable blend of 55% Hemp & 45% Organic Cotton, this smart casual shirt is ideal for summer. It features a left chest patch pocket, plastic-free Corozo nut buttons, and back pleats for a flexible fit across the shoulders. This button-up, collared shirt offers versatility, from office to home, bar to beach. Also available in navy or in short sleeve.',
        category: 'men',
        inventory: 37,
        imgURL: 'https://cdn.shopify.com/s/files/1/1074/5128/products/vb1971025-SS22-shirts-lifestyle-106_1100x.jpg?v=1650382577',
        subImg:'https://cdn.shopify.com/s/files/1/1074/5128/products/vb1978752-eaton-long-sleeve-ecru_1100x.jpg?v=1650382577'
    },
    {
        title: 'Petrichor Smock Shirt',
        price: 183,
        description:`There's something special about workwear, clothes that are fit for purpose and built to stand the test of time, with more stories to tell as they age. Our Petrichor Shirt pairs details from fishermen's smocks with a durable organic cotton fabric and overshirt fit, for a contemporary practical style that will just get better and better with wear.`,
        category: 'men',
        inventory: 28,
        imgURL: 'https://cdn.shopify.com/s/files/1/1074/5128/products/vb1971001-SS22-shirts-lifestyle-89_1100x.jpg?v=1650632147',
        subImg:'https://cdn.shopify.com/s/files/1/1074/5128/products/vb1978772_petrichore-smock-flint_1100x.jpg?v=1650632147'
    },
    {
        title: "Atlas Short Sleeve Shirt",
        price: 88,
        description:'The perfect summer shirt in our North Hills print, featuring a rolling landscape design that heavily references that rolling cornish hills. With a sunglasses pocket and plastic-free Corozo nut buttons, made from 100% linen. Wear open or closed, either by itself or with a t-shirt underneath.',
        category: 'men',
        inventory: 31,
        imgURL: 'https://cdn.shopify.com/s/files/1/1074/5128/products/vb1970917-SS22-shirts-lifestyle-14_1100x.jpg?v=1650382561',
        subImg:'https://cdn.shopify.com/s/files/1/1074/5128/products/vb1978739-camp-collar-shirt-north-hills-print_1100x.jpg?v=1650382561'
    },
    {
        title:"Eddystone Shirt",
        price: 129,
        description:`A true workshirt, the Eddystone is another addition to our Headland Grade collection - the name given to only the most durable products in our range. Built from a heavyweight 100% organic cotton fabric, we've included utility details like a secure side entry chest pocket with a pen/pencil slot for when you're grafting in the workshop. If you're looking for a shirt to take you from work to play and back again, look no further than the Eddystone.`,
        category: 'men',
        inventory: 43,
        imgURL: 'https://cdn.shopify.com/s/files/1/1074/5128/products/vb1943338_spring_2022-25_1100x.jpg?v=1646748315',
        subImg:'https://cdn.shopify.com/s/files/1/1074/5128/products/vb1951174_eddystone-shirt-navy-static_1100x.jpg?v=1646226190'
    },
    {
        title: "Clementine Pink Ditsy Floral Top",
        price: 140,
        description:`Cute top. This sweet little top will take your 'jeans and a nice top' game to the next level. Clementine has a fitted bodice finished with a peplum and pairs a romantic pleated front panel with a shirred back for extra comfort. The wide shoulder straps have been designed to be bra-friendly.        `,
        category: 'women',
        inventory: 61,
        imgURL: 'https://cdn.shopify.com/s/files/1/0008/9748/2815/products/Clementine-Pink-Ditsy-Floral-Top-by-KITRI-Studio-Front_675x.jpg?v=1650646258',
        subImg:'https://cdn.shopify.com/s/files/1/0008/9748/2815/products/Clementine-Pink-Ditsy-Floral-Top-by-KITRI-Studio_675x.jpg?v=1650646258'
    },
    {
        title: "Olga Tie Back Black Mono Floral Mini Dress",
        price: 235,
        description:'Every wardrobe needs a failsafe black dress and the Olga in the black mono black floral print is the one. Cut from premium cotton, this playful voluminous mini dress will take you from day to night with ease.',
        category: 'women',
        inventory: 79,
        imgURL: 'https://cdn.shopify.com/s/files/1/0008/9748/2815/products/Olga-Tie-Back-Black-Mono-Floral-Mini-Dress-by-KITRI-Studio-Front_675x.jpg?v=1650660004',
        subImg:'https://cdn.shopify.com/s/files/1/0008/9748/2815/products/Olga-Tie-Back-Black-Mono-Floral-Mini-Dress-by-KITRI-Studio_675x.jpg?v=1650660004'
    },
    {
        title: 'Bunty Blanket Stripe Midi Dress',
        price: 260,
        description:`Bunty is the kind of style you wish you could find in a vintage store but can't. Named after our designer's Grandma, whose blanket inspired this dress (thanks Bunty!), it's a sleeveless knitted midi dress in multicolour striped crochet with a deep-scooped back. Perfect over a bikini on the beach but, if you haven't booked your holiday yet, it comes with a simple black jersey cami dress to wear underneath.`,
        category: 'women',
        inventory: 50,
        imgURL: 'https://cdn.shopify.com/s/files/1/0008/9748/2815/products/Bunty-Blanket-Stripe-Midi-Dress-by-KITRI-Studio-Front_675x.jpg?v=1650663989',
        subImg:'https://cdn.shopify.com/s/files/1/0008/9748/2815/products/Bunty-Blanket-Stripe-Midi-Dress-by-KITRI-Studio_675x.jpg?v=1650663989'
    },
    {
        title: 'FUN FUN Top & Short Set',
        price: 19,
        description:`Beautiful watercolor printed cropped top with striped ruffled sleeves.

        Buttons on front with large tie design.
        
        Matching striped shorts with elasticated waist.`,
        category: 'kids',
        inventory: 70,
        imgURL: 'https://cdn11.bigcommerce.com/s-4wjqlc/images/stencil/1280x1280/products/11378/28105/IMG_0586__44667.1650405482.jpg?c=2',
        subImg:'https://cdn11.bigcommerce.com/s-4wjqlc/images/stencil/1280x1280/products/11378/28107/IMG_0588__35691.1650405480.jpg?c=2'
    },
    {
        title: 'BYBLOS Girls Black Logo Dress',
        price: 160,
        description:`Made in Italy.`,
        category: 'kids',
        inventory: 70,
        imgURL: 'https://cdn11.bigcommerce.com/s-4wjqlc/images/stencil/1280x1280/products/11375/28090/BYJDR11653__38297.1650405144.jpg?c=2',
        subImg:'https://cdn11.bigcommerce.com/s-4wjqlc/images/stencil/1280x1280/products/11375/28090/BYJDR11653__38297.1650405144.jpg?c=2'
    },
    {
        title: 'BYBLOS Girls Silver Faux Leather',
        price: 250,
        description:`Made in Italy.`,
        category: '',
        inventory: 70,
        imgURL: 'https://cdn11.bigcommerce.com/s-4wjqlc/images/stencil/1280x1280/products/11373/28084/BYJJK11886__81237.1650404314.jpg?c=2',
        subImg:'https://cdn11.bigcommerce.com/s-4wjqlc/images/stencil/1280x1280/products/11373/28084/BYJJK11886__81237.1650404314.jpg?c=2'
    },
    {
        title: 'BYBLOS Girls Logo Top & Sorts Set',
        price: 130,
        description:`Made in Italy`,
        category: '',
        inventory: 70,
        imgURL: 'https://cdn11.bigcommerce.com/s-4wjqlc/images/stencil/1280x1280/products/11370/28075/BYBCM11693__41018.1650404029.jpg?c=2',
        subImg: 'https://cdn11.bigcommerce.com/s-4wjqlc/images/stencil/1280x1280/products/11370/28075/BYBCM11693__41018.1650404029.jpg?c=2'
    },
    {
        title: 'GTerrace Drop Earrings',
        price: 25,
        description:'Arched garden style earrings with a printed floral vine image in olive and taupe.',
        category: 'accesories',
        inventory: 70,
        imgURL: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101061-2_1426x.jpg?v=1650308606',
        subImg: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101061-4_1426x.jpg?v=1650308606'
    },
    {
        title: 'Textile Drop Earrings | Houndstooth',
        price: 25,
        description:'Made of 100% rayon challis. Pullover style with elasticized waist. Allover floral print. Cold shoulder neck. Smocked bodice. Designed in an above-the-knee length. Imported',
        category: 'kids',
        inventory: 50,
        imgURL: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101009-D-1_1426x.jpg?v=1650308558',
        subImg: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101009-D-4_1426x.jpg?v=1650308562'
    },
    {
        title: 'Regal Drop Earrings',
        price: 82,
        description:'Dark silver metal dangle earrings with large rhinestones.',
        category: 'accessories',
        inventory: 60,
        imgURL: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101009-C-2_1426x.jpg?v=1650308512',
        subImg: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101043-4_1426x.jpg?v=1650308200'
    },
    {
        title: 'Boheme Stone Necklace (14K)',
        price: 30,
        description:`Bohemian style white and turquoise stone necklace with a gold undertone. Pair this long stone necklace with a flowing top.
        White and turquoise marble stone`,
        category: 'kids',
        inventory: 60,
        imgURL: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/020100370-2__34904_1426x.jpg?v=1645113593',
        subImg: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/020200058__13997.jpg?v=1645113595'
    },
    {
        title: 'Sunset Circle Necklace (14K)',
        price: 14,
        description:'Small gold circle pendant on a rope chain.',
        category: 'accessories',
        inventory: 60,
        imgURL: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/020100562_1__77526.jpg?v=1645115405',
        subImg: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/020100562-4__94244_1426x.jpg?v=1645115404'
    },
    {
        title: 'Hamlet Layered Necklace',
        price: 18,
        description:'The Hamlet Layered Necklace is a work of art, no tragedies here!',
        category: 'accessories',
        inventory: 60,
        imgURL: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L201005-2__41179_1426x.jpg?v=1645115930',
        subImg: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L201005-3__67325_1426x.jpg?v=1645115932'
    },
    {
        title: 'Thick and Thin Chain Bracelet (14K)',
        price: 16,
        description:'Gold chain linked choker style necklace, a great piece for layering!',
        category: 'accessories',
        inventory: 60,
        imgURL: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/030100160-1__65657_1426x.jpg?v=1645115639',
        subImg: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/030100160-3__31041_1426x.jpg?v=1645115637'
    },
    {
        title: 'Cool Girl Chain Anklet | Gold',
        price: 16,
        description:'Never try hard to look trendy again in this golden chic anklet!',
        category: 'accessories',
        inventory: 60,
        imgURL: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/030800020-G-2__36689_1426x.jpg?v=1645115815',
        subImg: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/030800020-G-3__01454_1426x.jpg?v=1645115813'
    }
]

module.exports = productData;