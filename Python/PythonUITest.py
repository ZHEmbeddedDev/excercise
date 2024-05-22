import customtkinter

class ReadingFrame():
    def __init__(self, parent, name, row, column):
        self.name = name
        self.parent = parent
        self.row = row
        self.column = column

        self.frame = customtkinter.CTkFrame(self.parent)
        self.frame.rowconfigure((0,1), weight=1)
        self.frame.columnconfigure((0,1,2,3), weight=1)
        self.nameLabel = customtkinter.CTkLabel(self.frame, text=self.name)
        self.nameLabel.grid(row=0, column=0, padx=10, pady=(2,0), sticky="w")
        self.numberLabel = customtkinter.CTkLabel(self.frame, 
                                                  text="0.00", 
                                                  width=100,
                                                  font=("Calia",30, "bold"), 
                                                  bg_color="white"
                                                  )
        self.numberLabel.grid(row=1, column=0, ipadx=2, ipady=2, padx=10, pady=(0,10), sticky="we")
        self.frame.grid(row=self.row, column=self.column, padx=2, pady=2, sticky="we")

def main():
    root = customtkinter.CTk()
    root.title("My UI")
    root.geometry("600x600")
    #root.rowconfigure(0, weight=1)
    root.columnconfigure((0,1,2), weight=0)
    customtkinter.set_default_color_theme("dark-blue")
    customtkinter.set_appearance_mode("dark")
    
    option = ["COM1","COM2","COM3","COM4"]
    combobox = customtkinter.CTkComboBox(root,values=option)
    combobox.set(option[0])
    combobox.grid(row=0, column=1, padx=2, pady=20, sticky="ew")
    button = customtkinter.CTkButton(root, text="Connect")
    button.grid(row=0, column=2, padx=2, pady=2, sticky="ew")
    
    readingFrame1 = ReadingFrame(root, "name1", 1, 0)
    readingFrame2 = ReadingFrame(root, "name2", 1, 1)
    readingFrame3 = ReadingFrame(root, "name3", 1, 2)
    readingFrame4 = ReadingFrame(root, "name4", 2, 0)
    readingFrame5 = ReadingFrame(root, "name5", 2, 1)
    readingFrame6 = ReadingFrame(root, "name6", 2, 2)
    readingFrame7 = ReadingFrame(root, "name7", 3, 0)
    readingFrame8 = ReadingFrame(root, "name8", 3, 1)
    readingFrame9 = ReadingFrame(root, "name9", 3, 2)

    switch = customtkinter.CTkSwitch(root,)
    root.mainloop()

if __name__ == "__main__":
    main()