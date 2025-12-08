// Class 15
import { SmartDisplay } from "./materi/class-15/1-basic-conditional-types/SmartDisplay";
import { ModernButton } from "./materi/class-15/2-conditional-type-looping-&-never/ModernButton";
import UserListContainer from "./materi/class-15/3-conditional-types-infer/UserListContainer";
import { ProfileCard } from "./materi/class-15/4-conditional-types-infer-&-generic-type/ProfileCard";
import {
  UserAvatar,
  UserDataList,
} from "./materi/class-15/5-pick-&-omit/UserAvatar";
import {
  ProductFilter,
  ProductEntry,
} from "./materi/class-15/6-partial-&-required/ProductFilter";
import TodoList from "./materi/class-15/7-readonly/TodoList";
import { DynamicIcon } from "./materi/class-15/8-record/DynamicIcon";

// Class 18
import TodoList2 from "./materi/class-18/TodoList";

const App = () => {
  return (
    <div>
      <h1>Class 15</h1>
      <div>
        <h2>1. Basic Conditional Types </h2>
        <SmartDisplay mode="text" value={"Hello"} />
      </div>
      <div>
        <h2>2. Conditional Type Looping dan Never</h2>
        <ModernButton color={"green"} label="Submit" />
      </div>
      <UserListContainer />
      <div>
        <h2>4. Conditional Type Infer Generic Types</h2>
        <ProfileCard />
      </div>
      <div>
        <h2>5. Pick & Omit</h2>
        <UserAvatar avatarUrl="./login.jpg" username="Ucup" />
        <UserDataList
          username={"Ucup"}
          id={1}
          email={"ucup123@gmail.com"}
          address={{
            city: "Jakarta",
            zip: "12021",
          }}
          lastLogin={"yesterday"}
          role={"admin"}
        />
      </div>
      <div>
        <h2>6. Partial & Required</h2>
        <ProductFilter />
        <hr />
        <ProductEntry />
      </div>
      <TodoList />
      <div>
        <h2>8. Record</h2>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <DynamicIcon name="home" />
          <DynamicIcon name="profile" />
          <DynamicIcon name="settings" />
          <DynamicIcon name="apple" />
        </div>
      </div>

      <div>
        <h1>CLASS 18 - Props</h1>
        <TodoList2 id={1} todo={"Makan"} />
        <TodoList2 id={2} todo={"Minum"} />
        <TodoList2 id={3} todo={"Tidur"} />
      </div>
    </div>
  );
};

export default App;
