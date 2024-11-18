## Preguntas y Respuestas entrevista técnica: Senior ReactJs

1. Pregunta: ¿Cuál es la diferencia entre props y state en React?

- Respuesta: Las props son un objeto que se pasan como argumentos de un componente padre a un componente hijo. Son inmutables y no se pueden modificar desde el componente hijo. El state es un valor que se define dentro de un componente. Su valor es inmutable (no se puede modificar directamente) pero se puede establecer un valor nuevo del estado para que React vuelva a renderizar el componente. Así que mientras tanto props como state afectan al renderizado del componente, su gestión es diferente.

2. Pregunta: ¿Por qué los props son inmutables? y ¿Cómo se validan los props?
   
- Respuesta: Por diseño, los props son únicamente de lectura para el componente que los recibe. El componente padre que los provee es quien puede modificarlos. Por ejemplo, un componente padre puede pasar por prop una variable de estado. Cada vez que cambie la variable de estado, hará un re render y su cambio será reflejado también en el componente hijo que lo recibe como prop. Se validan mediante PropTypes.

3. Pregunta: esta afirmación es verdadero o falso "Los hooks solo se pueden llamar en el nivel superior de un componente. No se pueden llamar dentro de bucles, condicionales o funciones anidadas."

- Respuesta:  Verdadero

4. Pregunta: ¿useState es síncrono o asíncrono?

```js
const MyComponent = () => {
  const [number, setNumber] = useState(1)

  const updateNumber = (newNumber) => {
    setNumber(newNumber)
    console.log(number) // qué imprime?
  }

  return (
    <>
      <button onClick={() => updateNumber(3)}>Click me</button>
      <p>{ number }</p>
    </>
  );
}
```

- Respuesta: Es Asíncrono, La respuesta es que imprime 1.

5. Pregunta: ¿Cómo actualizar un estado de array de objetos? Para actualizar una estructura como un array de un estado, necesitas crear un nuevo array añadiendo el nuevo objeto a los ya presentes:

```js
const newUserData = {
  name: 'Juanito',
  age: '20'
}

const MyComponent = () => {
  const [usersList, setUsersList] = useState([])

  const addUser = (newUserData) => {
    setUsersList(/*code...*/) // Cómo ? 
  }

   return (
    <>
      <button onClick={() => addUser(newUserData)}>Add User</button>
      <div>{ JSON.stringify(usersList) }</div>
    </>
  );
}
```

- Respuesta: 

```js
setUsersList([...usersList, newUserData])
```

6. Pregunta: ¿Cómo hacer para que al actualizar el valor del un state se lance una acccion: por ejemplo un print o una llamada http (la llamada no hace falta especificarla)

```js
import React from 'react';
import { useState } from 'react';

// Pregunta 6

export const Example03 = () => {
  const [number, setNumber] = useState(1);

  const updateNumber = (increment) => {
    setNumber(number + increment);
  };

  return (
    <>
      <button onClick={() => updateNumber(1)}>Click me</button>
      <div>{number}</div>
    </>
  );
};
```

- Respuesta: 

```js
import React from 'react';
import { useState, useEffect } from 'react';


export const Example03 = () => {
  const [number, setNumber] = useState(1);

  const updateNumber = (increment) => {
    setNumber(number + increment);
  };

  useEffect(() => {
    console.log(number);
  }, [number]);

  return (
    <>
      <button onClick={() => updateNumber(1)}>Click me</button>
      <div>{number}</div>
    </>
  );
};
```

7. Pregunta: ¿Por qué en la solucion de la anterior pregunta se renderiza dos veces el componente al principio apareciendo en la consola dos veces impreso el valor de ``number``?

- Respuesta: Al estar el modo estricto activado, esto es solo en modo desarrollo y hace que los componentes se vuelvan a renderizar un tiempo adicional para encontrar errores. Los componentes volverán a ejecutar Effects una vez más para encontrar errores causados por la falta de limpieza de Effects.

8. Pregunta: Para qué se usa el callback de useState? Considerando el siguiente ejemplo:

```js
const MyComponent = () => {
  const [number, setNumber] = useState(1)

  const updateNumber = (newNumber) => {
    setNumber((prevState) => {
      // code...
    })
  }

  return <button onClick={() => updateNumber(3)}>Click me</button>
}
```

- Respuesta: El callback de useState se utiliza para acceder de manera inmediata al valor del estado actual y podemos usarlo para tener garantía de cuál es su valor en curso antes de modificarlo.

9. Pregunta: ¿Podemos tener 2 useEffect en un mismo componente?

- Respuesta: Sí, puedes tener N useEffects en un mismo componente.

10. Pregunta: ¿Cómo replicas componentWillUnmount con useEffect?

```js
import { useEffect } from 'react'

const MyComponent = () => {
  useEffect(() => {
    // code...

  }, [])

  // rest of the code...
}

```

- Respuesta: Puedes retornar una función dentro del callback de un useEffect. Por diseño, React va a ejecutar esa función antes de que se desmonte el componente.

```js
import { useEffect } from 'react'

const MyComponent = () => {
  useEffect(() => {
    // code...

    return () => console.log('unmount')
  }, [])

  // rest of the code...
}

```

11. Pregunta: ¿Cómo funciona el hook useRef?

```js
import { useRef } from 'react'

function TextInputWithFocusButton() {
  const inputEl = useRef(null)

  const onButtonClick = () => {
    inputEl.current.focus()
  }

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  )
}
```

- Respuesta: Creamos una referencia inputEl con useRef y la pasamos al elemento ```<input>``` como prop ref. Cuando el componente se monta, la referencia inputEl apunta al elemento ```<input>``` del DOM. Para acceder al elemento del DOM, usamos la propiedad current de la referencia.

12.  Pregunta: ¿Por qué Redux es usado en React JS?

- Respuesta: Porque en apps grandes facilita el state management global, es decir, delegar a Redux la responsabilidad del estado global de la app como única fuente de la verdad.

13. Pregunta: ¿Qué es Lazy Loading en React?

- Respuesta: Es una manera de cargar el código de un componente hasta cuando va a ser utilizado, esto con fines de mejora de performance.

14. Pregunta: ¿Qué es Dispatch en React Redux?

- Respuesta: Es una utilidad que nos permite desencadenar actualizaciones del estado global por medio de actions.

15. Pregunta: ¿Qué es Thunk en React Redux?

- Respuesta: Es una utilidad independiente de Redux que nos permite ejecutar actions asíncronos de manera más eficiente.

16. Pregunta: ¿Qué es el Virtual DOM?

- Respuesta: Es una copia virtual del DOM que es guardada por JavaScript y es usado para que React pueda actualizar el DOM real con un buen performance.

17. Pregunta: ¿Qué es y para qué sirve la prop children en React?

- Respuesta: La prop children es una prop especial que se pasa a los componentes. Es un objeto que contiene los elementos que envuelve un componente. Por ejemplo, si tenemos un componente Card que muestra una tarjeta con un título y un contenido, podemos usar la prop children para mostrar el contenido:

```js
function Card(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div>{props.children}</div>
    </div>
  )
}
```

Y luego podemos usarlo de la siguiente forma:

```js
<Card title="Título de la tarjeta">
  <p>Contenido de la tarjeta</p>
</Card>
```

En este caso, la prop children contiene el elemento ```<p>Contenido de la tarjeta</p>```.

Conocer y saber usar la prop children es muy importante para crear componentes reutilizables en React.

18. Pregunta: ¿Se puede inicializar un estado con el valor de una prop? ¿Qué pasa si lo haces y qué hay que tener en cuenta?

- Respuesta: Sí, se puede inicializar el estado con el valor de una prop. Pero hay que tener en cuenta que, si la prop cambia, el estado no se actualizará automáticamente. Esto es porque el estado se inicializa una vez, cuando el componente se monta por primera vez.

19. Pregunta: ¿Cómo se pueden gestionar múltiples estados en un componente React?

- Respuesta: Puedes gestionar múltiples estados en un componente React utilizando el hook useState para cada estado individual. Sin embargo, si los estados están relacionados, puedes utilizar un solo objeto de estado para mantenerlos juntos.

20. Pregunta: ¿Cómo puedo aplicar estilos de forma condicional a un componente en React?

```js
function Button({ text, primary }) {
  return (
    <button>
      {text}
    </button>
  )
}
```

- Respuestas: Puedes aplicar estilos de forma condicional a un componente en React usando la prop style y un operador ternario:

```js
function Button({ text, primary }) {
  return (
    <button style={{ color: primary ? 'red' : 'blue' }}>
      {text}
    </button>
  )
}
```

También puedes seguir la misma mecánica usando clases. En este caso, usamos el operador ternario para decidir si añadir o no la clase:

```js
function Button({ text, primary }) {
  return (
    <button className={primary ? 'button-primary' : ''}>
      {text}
    </button>
  )
}
```

21. Pregunta: ¿Qué es el renderizado de listas en React?

- Respuesta: El renderizado de listas es la forma de iterar un array de elementos y renderizar elementos de React para cada uno de ellos. Para hacer renderizado de listas en React usamos el método map de los arrays.

```js
function List({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}
```

22. Pregunta: ¿Cómo añadir un evento a un componente en React?

- Respuesta: Para añadir un evento a un componente en React usamos la sintaxis on y el nombre del evento nativo del navegador en camelCase:

```js
function Button({ text, onClick }) {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}
```

23. Pregunta: ¿Cómo puedo pasar un parámetro a una función que maneja un evento en React?

- Respuestas: Para pasar un parámetro a una función que maneja un evento en React podemos usar una función anónima:

```js
function Button({ id, text, onClick }) {
  return (
    <button onClick={() => onClick(id)}>
      {text}
    </button>
  )
}
```

También puedes crear una función que ejecuta la función onClick pasándole el valor de la prop id:

```js
function Button({ id, text, onClick }) {
  const handleClick = (event) => { // handleClick recibe el evento original
    onClick(id)
  }

  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}
```

24. Pregunta: ¿Cómo puedes prevenir el comportamiento por defecto de un evento en React?

```js
function Form({ onSubmit }) {
  const handleSubmit = (event) => {
    onSubmit()
  }

  return <form onSubmit={handleSubmit}>
    <input type="text" />
    <button type="submit">Enviar</button>
  </form>
}
```

- Respuesta: Para prevenir el comportamiento por defecto de un evento en React, debemos usar el método preventDefault

```js
function Form({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit()
  }

  return <form onSubmit={handleSubmit}>
    <input type="text" />
    <button type="submit">Enviar</button>
  </form>
}
```

25. Pregunta: ¿Cómo, Cuando y por qué es recomendable importar componentes de forma dinámica?

ejemplo de carga de componente de forma estatica.

```js
import { useState } from 'react'
// importamos de forma estática el componente de la Modal
import { SuperBigModal } from './super-big-modal.jsx'

// mostrar modal si el usuario da click en un botón
export default function App () {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Mostrar modal</button>
      {showModal && <SuperBigModal />}
    </div>
  )
}
```

- Respuesta: Este componente SuperBigModal se importa de forma estática, por lo que se carga desde el principio. Pero, ¿qué pasa si el usuario no da click en el botón para mostrar la modal? En este caso, está cargando el componente pese a que no lo está usando. Si queremos ofrecer la mejor experiencia a nuestros usuarios, debemos intentar que la aplicación cargue lo más rápido posible. Por eso, es recomendable importar de forma dinámica los componentes que no se van a usar desde el principio.

Ten en cuenta que el componente que devuelve lazy() debe ser un componente de React y ser exportado por defecto (export default).

```js
import { useState } from 'react'
// importamos de forma dinámica el componente de la Modal
const SuperBigModal = lazy(() => import('./super-big-modal.jsx'))

// mostrar modal si el usuario da click en un botón
export default function App () {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Mostrar modal</button>
      <Suspense fallback={<div>Cargando modal...</div>}>
        {showModal && <SuperBigModal />}
      </Suspense>
    </div>
  )
}
```

26. Pregunta: ¿Qué es el Context API y cuál es su utilidad?

- Respuesta: Es parte del API nativo de React JS y es una forma de pasar datos a través de la jerarquía de componentes sin tener que pasar props manualmente en cada nivel.

27. Pregunta: ¿Qué son los portales en React?

```js
import { createPortal } from 'react-dom'

function Modal() {
  return createPortal(
    <div className="modal">
      <h1>Modal</h1>
    </div>,
    document.getElementById('modal')
  )
}
```

- Respuesta: Los portales nos permiten renderizar un componente en un nodo del DOM que no es hijo del componente que lo renderiza.

28. Pregunta: ¿Cómo se implementa el manejo de rutas en una aplicación React?

- Respuesta: El manejo de rutas se implementa comúnmente utilizando React Router. Se definen rutas y se asocian a componentes específicos, permitiendo la navegación entre diferentes vistas.

29. Pregunta: ¿Cómo se manejan las solicitudes HTTP en una aplicación React?

- Respuesta: Las solicitudes HTTP se manejan generalmente utilizando bibliotecas como Axios o la función fetch nativa de JavaScript. Puedes realizar solicitudes en hooks, como useEffect.

30. Pregunta: ¿Qué solución/es implementarías para evitar problemas de rendimiento al trabajar con listas de miles/millones de datos?

- Respuesta: Mediante paginación o técnica llamada Virtualización que gestiona cuántos elementos de una lista mantenemos vivos en el DOM.

31. Pregunta: ¿Para qué sirve el hook useMemo?

puedes explicar el siguiente código cómo funciona
```js
import { useMemo } from 'react'

function Counter({ count }) {
  const double = useMemo(() => count * 2, [count])

  return (
    <div>
      <p>Contador: {count}</p>
      <p>Doble: {double}</p>
    </div>
  )
}
```

Respuesta: El hook useMemo es un hook que nos permite **memorizar el resultado de una función**. Esto quiere decir que si la función que le pasamos como parámetro no ha cambiado, no se ejecuta de nuevo y se devuelve el resultado que ya se había calculado. El hook useMemo recibe dos parámetros: una función y un array de dependencias. La función se ejecuta cuando el componente se renderiza por primera vez y cuando alguna de las dependencias cambia, en este ejemplo la prop count. La ventaja es que si la prop count no cambia, se evita el cálculo del doble y se devuelve el valor que ya se había calculado previamente.

32. Pregunta: ¿Es buena idea usar siempre useMemo para optimizar nuestros componentes?

- Respuesta: No. useMemo es una herramienta que nos permite optimizar nuestros componentes, pero no es una herramienta mágica que nos va a hacer que nuestros componentes sean más rápidos. A veces el cálculo de un valor es tan rápido que no merece la pena memorizarlo

33. Pregunta: ¿Para qué sirve el hook useCallback?

puedes explicar el siguiente código cómo funciona
```js
import { useCallback } from 'react'

function Counter({ count, onIncrement }) {
  const handleIncrement = useCallback(() => {
    onIncrement(count)
  }, [count, onIncrement])

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={handleIncrement}>Incrementar</button>
    </div>
  )
}
```

- Respuesta: El hook useCallback es un hook que nos permite **memorizar una función**. Esto quiere decir que si la función que le pasamos como parámetro no ha cambiado, no se ejecuta de nuevo y se devuelve la función que ya se había calculado. En este caso, el componente Counter recibe una prop count que es un número y una prop onIncrement que es una función que se ejecuta cuando se pulsa el botón. El hook useCallback recibe dos parámetros: una función y un array de dependencias. La función se ejecuta cuando el componente se renderiza por primera vez y cuando alguna de las dependencias cambia, en este ejemplo la prop count o la prop onIncrement. La ventaja es que si la prop count o la prop onIncrement no cambian, se evita la creación de una nueva función y se devuelve la función que ya se había calculado previamente.

34. Pregunta: ¿Cuál es la diferencia entre useCallback y useMemo?

- Respuesta: La diferencia entre useCallback y useMemo es que useCallback memoriza una función y useMemo memoriza el resultado de una función.

35. Pregunta: ¿Qué es un custom hook en React y cuál es su utilidad?

```js
export function useCounter() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return { count, increment, decrement }
}
```

```js
import { useCounter } from './hooks/useCounter.js'

function Counter() {
  const { count, increment, decrement } = useCounter()

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </>
  )
}
```

- Respuesta: Un hook personalizado es una función que empieza con la palabra use y que puede utilizar otros hooks. Son ideales para reutilizar lógica en diferentes componentes. Por ejemplo, podemos crear un hook personalizado para extraer la gestión del estado de un contador:

36. Pregunta: ¿Qué es un Higher-Order Component (HOC) en React y cuál es su utilidad?

- Respuesta: Los High Order Components son funciones que reciben un componente como parámetro y devuelven un componente. Es un patrón que nos permite reutilizar código y así podemos inyectar funcionalidad, estilos o cualquier otra cosa a un componente de forma sencilla.

```js
function withLayout(Component) {
  return function(props) {
    return <main>
      <section>
        <Component {...props} />
      </section>
    </main>
  }
}
```

37. Pregunta: ¿Qué bibliotecas y herramientas se usan para realizar pruebas unitarias en componentes React?

- Respuesta: Las pruebas unitarias en componentes React se pueden realizar utilizando bibliotecas como Jest y herramientas de prueba como React Testing Library. Estas bibliotecas permiten simular eventos, comprobar el estado y verificar el renderizado de componentes.

38. Pregunta: ¿Qué es TDD?

- Respuesta: Test Driven Development es una técnica de desarrollo que consiste en ciclos de desarrollo en los que haces primero un test que falle, luego hacer lo mínimo para que pase y al final, un refactor. En cada ciclo de desarrollo se añaden al test los requerimientos que se pide que haga cada componente o parte funcional.

39. Pregunta: ¿Qué es un Mock de Jest?

- Respuesta: Un mock en Jest es una función que funciona como un stub y spy a la vez, y es usado para hacer unit testing cuando hay dependencias externas.

40. Pregunta: ¿Cómo puedo hacer testing de un componente?

```js
function Counter() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}
```

- Respuesta: Para hacer testing de un componente, puedes usar la función render de la librería @testing-library/react. Esta función nos permite renderizar un componente y obtener el resultado.

```js
import { render } from '@testing-library/react'

function Counter() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

test('Counter', () => {
  const { getByText } = render(<Counter />)

  expect(getByText('Count: 0')).toBeInTheDocument()
  fireEvent.click(getByText('Increment'))
  expect(getByText('Count: 1')).toBeInTheDocument()
})
```

41. Pregunta: ¿Cómo puedo hacer testing de un hook?

```js
function useCounter() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  return { count, increment }
}
```

- Respuesta: Para hacer testing de un hook, puedes usar la función renderHook de la librería @testing-library/react-hooks. Esta función nos permite renderizar un hook y obtener el resultado.

```js	
import { renderHook } from '@testing-library/react-hooks'

function useCounter() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  return { count, increment }
}

test('useCounter', () => {
  const { result } = renderHook(() => useCounter())

  expect(result.current.count).toBe(0)
  act(() => {
    result.current.increment()
  })
  expect(result.current.count).toBe(1)
})
```

42. ¿Qué es el Profiler en React?

```js
import { Profiler } from 'react'

function App() {
  return (
    <Profiler id="App" onRender={(id, phase, actualDuration) => {
      console.log({id, phase, actualDuration})
    }}>
      <Component />
    </Profiler>
  )
}
```

- Respuesta: El Profiler es un componente que nos permite medir el tiempo que tarda en renderizarse un componente y sus hijos.

43. ¿Cómo puedes acceder al evento nativo del navegador en React?

```js
function Button({ onClick }) {
  return <button onClick={}>Haz clic aquí</button>
}
```

- Respuesta: React no expone el evento nativo del navegador. En su lugar, React crea un objeto sintético que se basa en el evento nativo del navegador llamado SyntheticEvent. Para acceder al evento nativo del navegador, debemos usar el atributo ``nativeEvent``:

```js
function Button({ onClick }) {
  return <button onClick={e => onClick(e.nativeEvent)}>Haz clic aquí</button>
}
```

44. ¿Cómo puedes cancelar una petición a una API en useEffect correctamente?

Cuando hacemos una petición a una API, cómo podemos cancelarla para evitar que se ejecute cuando el componente se desmonte.

```js
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
    .then(json => setMessage(json.title))
    .catch(error => {
      if (error.name !== 'AbortError') {
        console.error(error.message)
      }
    })
}, [])
```

- Respuesta: usando AbortController

```js
useEffect(() => {
  // Creamos el controlador para abortar la petición
  const controller = new AbortController()
  // Recuperamos la señal del controlador
  const { signal } = controller
  // Hacemos la petición a la API y le pasamos como options la señal
  fetch('https://jsonplaceholder.typicode.com/posts/1', { signal })
    .then(res => res.json())
    .then(json => setMessage(json.title))
    .catch(error => {
      // Si hemos cancelado la petición, la promesa se rechaza
      // con un error de tipo AbortError
      if (error.name !== 'AbortError') {
        console.error(error.message)
      }
    })

  // Si se desmonta el componente, abortamos la petición
  return () => controller.abort()
}, [])
```