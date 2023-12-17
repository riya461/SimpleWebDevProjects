const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Miyah Myles',
    position: 'Marketing',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quae nisi blanditiis distinctio qui perspiciatis commodi suscipit earum unde beatae illo quibusdam numquam odit laboriosam mollitia sapiente obcaecati, dolore vero?"  ,
  },
  {
    name: 'June Cha',
    position: 'Software Engineer',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quae nisi blanditiis distinctio qui perspiciatis commodi suscipit earum unde beatae illo quibusdam numquam odit laboriosam mollitia sapiente obcaecati, dolore vero?',
  },
  {
    name: 'Iida Niskanen',
    position: 'Data Entry',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quae nisi blanditiis distinctio qui perspiciatis commodi suscipit earum unde beatae illo quibusdam numquam odit laboriosam mollitia sapiente obcaecati, dolore vero?",
  },
  {
    name: 'Renee Sims',
    position: 'Receptionist',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quae nisi blanditiis distinctio qui perspiciatis commodi suscipit earum unde beatae illo quibusdam numquam odit laboriosam mollitia sapiente obcaecati, dolore vero?",
  },
  {
    name: 'Jonathan Nunfiez',
    position: 'Graphic Designer',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quae nisi blanditiis distinctio qui perspiciatis commodi suscipit earum unde beatae illo quibusdam numquam odit laboriosam mollitia sapiente obcaecati, dolore vero?",
  },
  {
    name: 'Sasha Ho',
    position: 'Accountant',
    photo:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quae nisi blanditiis distinctio qui perspiciatis commodi suscipit earum unde beatae illo quibusdam numquam odit laboriosam mollitia sapiente obcaecati, dolore vero?',
  },
  {
    name: 'Veeti Seppanen',
    position: 'Director',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text:
      'This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.',
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)