import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.COLORS.OVERLAY,
  },
  discord: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
  content: {
    backgroundColor: THEME.COLORS.SHAPE,
    width: 311,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  closeIcon: {
    alignSelf: "flex-end",
    margin: 16,
  },
  header: {
    alignItems: "center",
    marginTop: 24,
  },
  label: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    marginTop: 24,
    marginBottom: 8,
  },
  discordButton: {
    width: 231,
    height: 48,
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    marginBottom: 32,
  },
});
