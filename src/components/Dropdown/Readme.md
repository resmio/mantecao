Keep open on internal clicks:

    <Dropdown triggerNode={<button>open dropdown</button>}>
      <span>inside dropdown</span>
    </Dropdown>

Close on click:

    <Dropdown triggerNode={<button>open dropdown</button>} closeOnClick>
      <span>inside dropdown</span>
    </Dropdown>

With arrow:

    <Dropdown triggerNode={<button>open dropdown</button>} arrow>
      <span>inside dropdown</span>
    </Dropdown>

Prop controlled:

    <Dropdown
      triggerNode={<button>always closed</button>}
      isOpen={false}
      closeDropdown={() => console.log('open/close functions still called so outside controls can manage state')}
      openDropdown={() => console.log('open/close functions still called so outside controls can manage state')}
    >
      <span>keepOpen</span>
    </Dropdown>
