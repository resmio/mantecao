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
      triggerNode={<button>open dropdown</button>}
      isOpen
      closeDropdown={() => console.log('close function still called so outside controls can manage state')}
      openDropdown={() => false}
    >
      <span>keepOpen</span>
    </Dropdown>
