
import { Button, Label, TextInput } from 'flowbite-react';

export default function Form({value}) {
    
  return (
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="origin"
            value="Destination"
          />
        </div>
        <TextInput
          id="origin"
          placeholder='Origin'
          required
          type="email"
        />
     </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="destination"
            value="Destination"
          />
        </div>
        <TextInput
          id="destination"
        placeholder='Destination'
        value={value}
          required
          type="email"
        />
     </div>
 
      <Button type="submit" color='warning'>
        Submit
      </Button>
    </form>
  )
}


