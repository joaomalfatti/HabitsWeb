import './styles/global.css';

import { Habit } from './components/Habit';

function app() {
  return (
    <div>
      <Habit completed={3}/>
      <Habit completed={10}/>
      <Habit completed={20}/>
      <Habit completed={30}/>
    </div>
  );
}

export default app;