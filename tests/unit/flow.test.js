test('flowtype', () => {
  type Person = {
    firstname: string,
    lastname: string,
  }

  const aPerson = {
    firstname: 'Vincent',
    lastname: 'Coco',
  };

  function whoIsHe(person: Person) {
    return person.firstname;
  }

  expect(whoIsHe(aPerson)).toEqual('Vincent');
});
