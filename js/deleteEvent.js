function deleteEvent(name) {

con.query( "DROP FROM Calendar WHERE id = @id1", function (err, result, feilds) {
    if (err) throw err;
    console.log(result);
  });
});
