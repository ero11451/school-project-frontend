import { Carousel } from '../../components/ui/Carousel'

export default function AppleCardsCarouselDemo() {
  return (
    <div>
      <Carousel slides={[
        {
            title: 'iPhone 13 Pro',
            button: 'The biggest Pro camera system upgrade ever.',
            src: 'https://images.unsplash.com/photo-1631673073354-1b9b6c9b5e1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTI2NjN8MHwxfGFsbHwxf'
        }
      ]} />
    </div>
  )
}
