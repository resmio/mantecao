Example:

    <Dropdown
      triggerNode={<button>open dropdown</button>}
      isOpen={true}
      openDropdown={() => console.log('open dropdown')}
      closeDropdown={() => console.log('close dropdown')}
    >
      <span>inside dropdown</span>
    </Dropdown>
