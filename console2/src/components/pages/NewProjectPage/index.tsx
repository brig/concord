import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Breadcrumb, Container, Header, Segment } from 'semantic-ui-react';

import { NewProjectActivity } from '../../organisms';

interface RouteProps {
    orgName: string;
}

class NewProjectPage extends React.PureComponent<RouteComponentProps<RouteProps>> {
    render() {
        const { orgName } = this.props.match.params;

        return (
            <>
                <Segment basic={true}>
                    <Breadcrumb size="big">
                        <Breadcrumb.Section>
                            <Link to="/org">Organizations</Link>
                        </Breadcrumb.Section>
                        <Breadcrumb.Divider />
                        <Breadcrumb.Section>
                            <Link to={`/org/${orgName}`}>{orgName}</Link>
                        </Breadcrumb.Section>
                        <Breadcrumb.Divider />
                        <Breadcrumb.Section active={true}>New project</Breadcrumb.Section>
                    </Breadcrumb>
                </Segment>

                <Segment basic={true}>
                    <Container text={true}>
                        <Header>Create a New Project</Header>
                        <NewProjectActivity orgName={orgName} />
                    </Container>
                </Segment>
            </>
        );
    }
}

export default withRouter(NewProjectPage);