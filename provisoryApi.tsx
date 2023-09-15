const baseProducts = [
  { id: 1, name: 'Caneca de cerâmica rústica', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.", image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg', price: "37,00",category: 'mugs' },
  { id: 2, name: 'Camiseta not today.', description: "rem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.", image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-05.jpg', price: "17,00",category: 't-shirts' },
  { id: 3, name: 'Caneca Black Ring', description: "rem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.", image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-04.jpg', price: "37,00",category: 'mugs' },
  { id: 4, name: 'Camiseta Broken Saints', description: "rem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.", image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-03.jpg', price: "87,00",category: 't-shirts' },
  { id: 5, name: 'Camiseta Outcast', description: ": Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.", image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-06.jpg', price: "37,00",category: 't-shirts' },
  { id: 6, name: 'Caneca The Grounds', description: "rem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.", image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-05.jpg', price: "37,00",category: 'mugs' },
  { id: 7, name: 'Camiseta evening', description: ": Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.", image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-02.jpg', price: "107,00",category: 't-shirts' },
  { id: 8, name: 'Caneca preto fosco', description: "rem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.", image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-01.jpg', price: "37,00",category: 'mugs' },
  { id: 9, name: 'Caneca Never settle', description: "rem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.", image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-03.jpg', price: "37,00",category: 'mugs' },
  { id: 10, name: 'Camiseta DREAMER', description: ": Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.", image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-01.jpg', price: "37,00",category: 't-shirts' },
  { id: 11, name: 'Caneca Decaf! P&Co', description: "rem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.", image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/caneca-02.jpg', price: "7,00",category: 'mugs' },
  { id: 12, name: 'Camiseta Ramones', description: ": Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus.", image_url: 'https://storage.googleapis.com/xesque-dev/challenge-images/camiseta-04.jpg', price: "57,00",category: 't-shirts' },
]

const shirtsCategory = baseProducts.filter((value, index) => value.category === 't-shirts')

const mugsCategory = baseProducts.filter((value, index) => value.category === 'mugs')

export {baseProducts, shirtsCategory, mugsCategory}