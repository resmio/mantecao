Keep open on internal clicks:

    <Dropdown triggerNode={<BorderButton>open dropdown</BorderButton>}>
      <div style={{width: '300px'}}>inside dropdown (fixed child width)</div>
    </Dropdown>

Close on click:

    <Dropdown triggerNode={<BorderButton>open dropdown</BorderButton>} closeOnClick>
      <div>inside dropdown</div>
    </Dropdown>

With arrow:

    <Dropdown triggerNode={<DotDotDotIcon />} arrow>
      <div style={{width: '300px'}}>inside dropdown (fixed child width)</div>
    </Dropdown>

Prop controlled:

    <Dropdown
      triggerNode={<BorderButton>always closed</BorderButton>}
      isOpen={false}
      closeDropdown={() => console.log('open/close functions still called so outside controls can manage state')}
      openDropdown={() => console.log('open/close functions still called so outside controls can manage state')}
    >
      <span>keepOpen</span>
    </Dropdown>
