import './App.css';
import {ArrowFuncComponent} from "./componets/001_component_types/ArrowFuncComponent";
import ClassComponent from "./componets/001_component_types/ClassComponent";
import FuncComponent from "./componets/001_component_types/FuncComponent";
import Counter from "./componets/002_component_state/Counter";
import MyComponent from "./componets/002_component_state/MyComponent";


import FormWrapper from "./componets/003_forms/FormWrapper";
import ConditionalControls from "./componets/004_conditial_rendering/ConditionalControls";
import ComponentLifeClass from "./componets/005_component_lifecycle/ComponentLifeClass";
import ComponentLifeFn from "./componets/005_component_lifecycle/ComponentLifeFn";
import Parent from "./componets/006_parent_child/Parent";
import UseList from "./componets/007_http/UseList";
import StrictModeCounter from "./componets/008_strict_mode/StrictModeCounter";
import MemoExample from "./componets/009_memo_example/MemoExample";
import TickExample from "./componets/010_clean_up_hook/TickExample";


function App() {
  return (
    <div className="App">
        {/*<ClassComponent feedback="Nice"/>*/}
        {/*<ClassComponent/>*/}
        {/*<FuncComponent name="World"/>*/}
        {/*<FuncComponent xxx="Taras"/>*/}
        {/*<ArrowFuncComponent/>*/}

        {/*<MyComponent/>*/}
        {/*<MyComponent firstName="Taras" lastName="Halynskyi" count={20}/>*/}
        {/*<Counter/>*/}
        {/*<Counter count={100}/>*/}

        {/*<FormWrapper/>*/}
        {/*<ConditionalControls showRest={false}/>*/}
        {/*<ConditionalControls showRest={true}/>*/}
        {/*<ComponentLifeClass/>*/}
        {/*<ComponentLifeFn count={10}/>*/}
        {/*<Parent/>*/}
        {/*<UseList/>*/}
        {/*<StrictModeCounter/>*/}
        {/*<MemoExample/>*/}
        <TickExample/>
    </div>
  );
}

export default App;
