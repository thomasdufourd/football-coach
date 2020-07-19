import * as React from "react";
import {Container, Table} from "react-bootstrap";
import {Link, useLocation} from "react-router-dom";

interface Props {
    group: string;
}

const TeamsOverview: React.FunctionComponent<Props> = (props) => {
    const location = useLocation();

    return (
        <Container>
            <h1 className="m-2">Teams overview</h1>
            <p className="m-2">Set up teams for a training session, friendly game or a competition</p>

            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Event</th>
                    <th>Type</th>
                    <th>Last updated</th>
                    <th>Status</th>
                    <th>Lineup</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>
                        <Link
                            to={{
                                pathname: "/teams/regularseason/current",
                                search: location.search,
                            }}
                        >
                            Lag til seriespill 2020 (kamp 1 til 3)
                        </Link>
                    </td>
                    <td>Seriespill 2020</td>
                    <td>Regular season</td>
                    <td>2020-05-05 13:45</td>
                    <td>Settled</td>
                    <td>
                        <Link
                            to={{
                                pathname: "/lineups",
                                search: location.search,
                            }}
                        >
                        Yes
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Lag til seriespill 2020 (kamp 4 til 6)</td>
                    <td>Seriespill 2020</td>
                    <td>Regular season</td>
                    <td>2020-05-08 19:02</td>
                    <td>Draft</td>
                    <td>No</td>
                </tr>
                </tbody>
            </Table>
        </Container>
    )
};

export default TeamsOverview;
