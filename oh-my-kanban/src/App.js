import logo from './logo.svg';
import './App.css';
const todoList = [
  {title:'开发任务-3', status:'23-09-09 19:00'},
  {title:'开发任务-5', status:'23-08-11 19:00'},
  {title:'开发任务-7', status:'23-08-20 19:00'},
  {title:'测试任务-3', status:'23-08-30 19:00'},
];
const ongoinList = [
  {title:'开发任务-2', status:'23-08-12 19:00'},
  {title:'开发任务-4', status:'23-08-22 19:00'},
  {title:'开发任务-6', status:'23-08-24 19:00'},
  {title:'测试任务-2', status:'23-08-26 19:00'},
];
const doneList = [
  {title:'开发任务-1', status:'23-08-09 19:00'},
  {title:'测试任务-1', status:'23-08-07 19:00'},
];
const KanbanCard = ({title,status}) => {
  return (
    <li className='kanban-card'>
      <div className='card-title'>
    {title}
      </div>
      <div className='card-title'>
    {status}
      </div>
    </li>
  );
};
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>我的看板</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className='kanban-board'>
      <section className='kanban-column column-todo'>
        <h2>待处理</h2>
        <ul>
        {
         todoList.map(props => <KanbanCard {...props} />)
        }
      </ul>
      </section>
      <section className='kanban-column column-ongoing'>
        <h2>进行中</h2>
        <ul>
        {
         ongoinList.map(props => <KanbanCard {...props} />)
        }  
        </ul>
      </section>
      <section className='kanban-column column-done'>
        <h2>已完成</h2>
        <ul>
        {
         doneList.map(props => <KanbanCard {...props} />)
        }
        </ul>
      </section>

      </main>
    </div>
  );
}

export default App;
