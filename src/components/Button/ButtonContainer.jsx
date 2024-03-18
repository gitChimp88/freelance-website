import Button from './Button';

export default function ButtonContainer() {
  const handleClick = () => {
    console.log('Button Clicked!');
    alert('You clicked me!');
  };
  return <Button handleClick={handleClick} text={'Click me!'} />;
}
