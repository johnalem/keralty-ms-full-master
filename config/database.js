module.exports = {
  hrPool: {
    user: process.env.ORA_USER_MONITOR = "RIPSS",
    password: process.env.ORA_PASSWORD_MONITOR = "yE91ijGeTL",
    connectString: process.env.ORA_CONNECTIONSTRING_MONITOR = "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(Host=204.110.52.42)(Port=1521))(CONNECT_DATA=(SID=ORCL)))",
    poolMin: 10,
    poolMax: 10,
    poolIncrement: 0
  }
};