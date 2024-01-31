
// the below one is customTable Component

// material
import { Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
// components

// ----------------------------------------------------------------------

export default function CustomTable({ columns, data, isLoading = false, sx, cardSx, freezeColum }) {
  const columnsToShow = Object.entries(columns).filter(e => e[1].status);
  
  return (
    <Card sx={{ flex: 1, py: 1, mt: 2, ...cardSx }}>
      <TableContainer>
          <Table sx={{ minWidth: 1000, ...sx }}>
            <TableHead>
              <TableRow>
                {columnsToShow.map((item, i) => {
                  const isFreeze = i == freezeColum;
                  const cellId = `table-th-key-${item[0]}-${i}`;

                  if (isFreeze) return (
                    <TableCell
                      key={cellId}
                      sx={{
                        right: 0,
                        position: "sticky",
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {item[1].title}
                    </TableCell>
                  );

                  return (
                    <TableCell key={cellId} sx={{ whiteSpace: 'nowrap' }}>{item[1].title}</TableCell>
                  )
                })}
              </TableRow>
            </TableHead>
            <TableBody>

              {data?.length === 0 && !isLoading && (
                <TableRow>
                  <TableCell colSpan={columnsToShow.length}>
                  </TableCell>
                </TableRow>
              )}
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={columnsToShow.length}>
                    <Typography>Loading...</Typography>
                  </TableCell>
                </TableRow>
              )
                : data?.map((item, dataIndex) => {
                  return (
                    <TableRow key={item.id}>
                      {columnsToShow.map((colItem, i) => {
                        const isFreeze = i == freezeColum;
                        const cellId = `table-td-key-${colItem[0]}-${i}`;

                        if (isFreeze) return (
                          <TableCell
                            component={Card}
                            key={cellId}
                            sx={{
                              right: 0,
                              borderRadius: 0,
                              position: "sticky",
                              whiteSpace: 'nowrap'
                            }}
                          >
                            {colItem[1]?.getElement(item, dataIndex)}
                          </TableCell>
                        );

                        return (
                          <TableCell key={cellId} sx={{ whiteSpace: 'nowrap', ...colItem[1]?.sx }}>{colItem[1]?.getElement(item, dataIndex)}</TableCell>
                        )
                      })}
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
      </TableContainer>
    </Card>
  )
};