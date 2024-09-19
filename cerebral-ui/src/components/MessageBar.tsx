import { Stack, IStackProps, ITheme, IThemeRules, DefaultPalette } from "@fluentui/react";
import { Text } from "@fluentui/react-components";

export interface IHeaderProps {
    themeRules?: IThemeRules;
  }
  
  export interface IHeaderState {
    showPanel: boolean;
    jsonTheme: string;
    powershellTheme: string;
    themeAsCode: any;
  }
  
  const headerStackStyles = (p: IStackProps, theme: ITheme) => ({
    root: {
      backgroundColor: DefaultPalette.neutralLighterAlt,
      minHeight: 47,
      padding: '0 32px',
      boxShadow: theme.effects.elevation16,
    },
  });

const MessageBar: React.FC = () => {
    return(
    <Stack horizontal horizontalAlign="space-between" verticalAlign="center" grow={0} styles={headerStackStyles} color="grey">
        <Stack horizontal horizontalAlign="start">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2ZM7.80943 7.11372C7.61456 6.97872 7.34514 6.99801 7.17157 7.17157L7.11372 7.24082C6.97872 7.43569 6.99801 7.70511 7.17157 7.87868L9.29289 10L7.17157 12.1213L7.11372 12.1906C6.97872 12.3854 6.99801 12.6549 7.17157 12.8284L7.24082 12.8863C7.43569 13.0213 7.70511 13.002 7.87868 12.8284L10 10.7071L12.1213 12.8284L12.1906 12.8863C12.3854 13.0213 12.6549 13.002 12.8284 12.8284L12.8863 12.7592C13.0213 12.5643 13.002 12.2949 12.8284 12.1213L10.7071 10L12.8284 7.87868L12.8863 7.80943C13.0213 7.61456 13.002 7.34514 12.8284 7.17157L12.7592 7.11372C12.5643 6.97872 12.2949 6.99801 12.1213 7.17157L10 9.29289L7.87868 7.17157L7.80943 7.11372Z" fill="#B10E1C"/>
            </svg>
        </Stack>
        <Stack horizontal horizontalAlign="center">
            <Text size={200}>HotMelt sensor has errors</Text>
        </Stack>
        <Stack horizontal horizontalAlign="center">
            <Text size={200}>Copilot detects that the HotMelt sensor in FFR2 line has errors happened in 3 hours ago</Text>
        </Stack>
      </Stack>
    );
};

export default MessageBar;