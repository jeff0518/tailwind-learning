import Header from "./component/Header";
import Card from "./component/Card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container mx-auto mt-10">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <Card title="No.1">一張卡片</Card>
          <Card title="No.2">一張卡片</Card>
          <Card title="No.3">一張卡片</Card>
          <Card title="No.4">一張卡片</Card>
        </div>
      </main>
    </div>
  );
}

export default App;
