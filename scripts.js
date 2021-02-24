let currentPhoto = 0;
let imagesData = [
    {   photo: './images/pexels-achim-bongard-289327.jpg',
        title: 'Lorem ipsum dolor 1',
        description: '1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis mi nec ultricies scelerisque. Donec tincidunt eu urna eget volutpat. Maecenas pellentesque dictum eros quis volutpat.'
      },
    {   photo: './images/pexels-ben-cheung-441379.jpg',
        title: 'Lorem ipsum dolor 2',
        description: '2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis mi nec ultricies scelerisque. Donec tincidunt eu urna eget volutpat. Maecenas pellentesque dictum eros quis volutpat.'
      },
    {   photo: './images/pexels-gabriela-palai-507410.jpg',
        title: 'Lorem ipsum dolor 3',
        description: '3: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis mi nec ultricies scelerisque. Donec tincidunt eu urna eget volutpat. Maecenas pellentesque dictum eros quis volutpat.'
      },
    {   photo: './images/pexels-janez-podnar-1424239.jpg',
        title: 'Lorem ipsum dolor 4',
        description: '4: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis mi nec ultricies scelerisque. Donec tincidunt eu urna eget volutpat. Maecenas pellentesque dictum eros quis volutpat.'
      },
    {   photo: './images/pexels-lisa-fotios-1438248.jpg',
        title: 'Lorem ipsum dolor 5',
        description: '5: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis mi nec ultricies scelerisque. Donec tincidunt eu urna eget volutpat. Maecenas pellentesque dictum eros quis volutpat.'
      },
    {   photo: './images/pexels-markus-spiske-117843.jpg',
        title: 'Lorem ipsum dolor 6',
        description: '6: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis mi nec ultricies scelerisque. Donec tincidunt eu urna eget volutpat. Maecenas pellentesque dictum eros quis volutpat.'
      },
    {   photo: './images/pexels-pixabay-235734.jpg',
        title: 'Lorem ipsum dolor 7',
        description: '7: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis mi nec ultricies scelerisque. Donec tincidunt eu urna eget volutpat. Maecenas pellentesque dictum eros quis volutpat.'
      },
    {   photo: './images/pexels-pixabay-459203.jpg',
        title: 'Lorem ipsum dolor 8',
        description: '8: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis mi nec ultricies scelerisque. Donec tincidunt eu urna eget volutpat. Maecenas pellentesque dictum eros quis volutpat.'
      },
    {   photo: './images/pexels-pixabay-460635.jpg',
        title: 'Lorem ipsum dolor 9',
        description: '9: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis mi nec ultricies scelerisque. Donec tincidunt eu urna eget volutpat. Maecenas pellentesque dictum eros quis volutpat.'
      },
    {   photo: './images/pexels-ray-bilcliff-3073711.jpg',
        title: 'Lorem ipsum dolor 10',
        description: '10: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis mi nec ultricies scelerisque. Donec tincidunt eu urna eget volutpat. Maecenas pellentesque dictum eros quis volutpat.'
      }
];


$( document ).ready(function() {
    $('#photo').attr('src', imagesData[currentPhoto].photo);
    $('#photo-title').html(imagesData[currentPhoto].title);
    $('#photo-description').html(imagesData[currentPhoto].description);
});