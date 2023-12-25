const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement(
    'div',
    { id: 'child' },
    React.createElement('h1', { id: 'heading' }, 'Hello world from react')
  ),
  React.createElement(
    'div',
    { id: 'child' },
    React.createElement(
      'h1',
      { id: 'heading' },
      'Hello world from react child 2'
    )
  ),
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
